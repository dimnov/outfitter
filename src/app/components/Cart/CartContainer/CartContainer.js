"use client";

import { useCart } from "@/app/context/CartContext";
import CartProductsBox from "../CartProductsBox/CartProductsBox";
import CartSummaryBox from "../CartSummaryBox/CartSummaryBox";
import styles from "./CartContainer.module.css";
import Link from "next/link";

function CartContainer() {
  const { cartLength } = useCart();

  return (
    <div className={styles.cart_container}>
      {cartLength ? (
        <>
          <h3 className={styles.cart_title}>your cart</h3>

          <div className={styles.cart_box}>
            <CartProductsBox />
            <CartSummaryBox />
          </div>
        </>
      ) : (
        <div className={styles.empty_cart}>
          <h3 className={styles.cart_title}>your cart is empty</h3>
          <Link href={"/shop"} className={styles.back_button} aria-label="Go to shop page">
            Go to Products
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartContainer;
