"use client";

import { useState } from "react";
import ProductPriceBox from "../../Catalog/Products/ProductPriceBox/ProductPriceBox";
import StarScore from "../../Icons/StarScore";
import styles from "./ProductDetails.module.css";
import ProductColors from "../ProductColors/ProductColors";
import ProductSizes from "../ProductSizes/ProductSizes";
import ProductQuantity from "../ProductQuantity/ProductQuantity";
import ProductButtons from "../ProductSizes/ProductButtons/ProductButtons";
import { useProduct } from "@/app/context/ProductContext";
import { useCart } from "@/app/context/CartContext";

const SIZES = [
  {
    text: "Small",
    value: "s",
  },
  {
    text: "Medium",
    value: "m",
  },
  {
    text: "Large",
    value: "l",
  },
];

const initialState = {
  color: "",
  size: "",
  quantity: 1,
};

function ProductDetails() {
  const { productData } = useProduct();
  const { title, description, discount_price, price, score, products_colors } = productData;

  const [product, setProduct] = useState(initialState);
  const { addToCart } = useCart();

  const updateProduct = (key, value) => {
    setProduct((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const adjustQuantity = (action) => {
    setProduct((prevState) => ({
      ...prevState,
      quantity: Math.max(1, prevState.quantity + (action === "add" ? 1 : -1)),
    }));
  };

  const handleAddToCart = () => {
    const productToAdd = {
      id: productData.id,
      title,
      price: discount_price || price,
      color: product.color,
      size: product.size,
      quantity: product.quantity,
    };

    if (!product.color || !product.size) {
      alert("Please select a color and size before adding to cart.");
      return;
    }

    addToCart(productToAdd);
    alert("Product added to cart!");
  };

  return (
    <div className={styles.product_details}>
      <h3 className={styles.title}>{title}</h3>
      <StarScore size={24} score={score} />
      <ProductPriceBox discount_price={discount_price} price={price} className={styles.fontSize} />
      <p className={styles.description}>{description}</p>
      <hr />
      <ProductColors
        colors={products_colors}
        selectedColor={product.color}
        onClick={updateProduct}
      />
      <hr />
      <ProductSizes sizes={SIZES} selectedSize={product.size} onClick={updateProduct} />
      <hr />
      <ProductButtons
        quantity={product.quantity}
        onClickQuantity={adjustQuantity}
        onClickAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default ProductDetails;
