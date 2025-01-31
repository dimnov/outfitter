"use client";

import { useCart } from "@/app/context/CartContext";
import CartProductBox from "../CartProductBox/CartProductBox";
import styles from "./CartProductsBox.module.css";

function CartProductsBox() {
  const { cart } = useCart();

  return (
    <div className={styles.cart_products_box}>
      {cart.map((product) => (
        <CartProductBox key={product.id} product={product} />
      ))}
    </div>
  );
}

export default CartProductsBox;
