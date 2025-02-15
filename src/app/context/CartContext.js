"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const cartTotalPrice = cart.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  const cartTotalDiscountPrice = cart.reduce((total, item) => {
    const discountPrice = item.discount_price > 0 ? item.discount_price : item.price;
    return total + (item.price - discountPrice) * item.quantity;
  }, 0);

  const cartTotal = cartTotalPrice - cartTotalDiscountPrice;

  const deliveryFee = cartTotal >= 100 ? 0 : 10;

  const cartLength = cart.reduce((acc, product) => acc + product.quantity, 0);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) =>
          item.id === product.id && item.color === product.color && item.size === product.size
      );

      if (existingProductIndex !== -1) {
        return prevCart.map((item, index) =>
          index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, color, action, size) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.color === color && item.size === size
          ? {
              ...item,
              quantity: action === "increase" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartLength,
        cartTotalPrice,
        cartTotalDiscountPrice,
        cartTotal,
        deliveryFee,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
