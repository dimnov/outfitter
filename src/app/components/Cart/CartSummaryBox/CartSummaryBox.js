"use client";

import { useCart } from "@/app/context/CartContext";
import styles from "./CartSummaryBox.module.css";

function CartSummaryBox() {
  const { cartTotalPrice, cartTotalDiscountPrice, cartTotal, deliveryFee } = useCart();

  const feeForDelivery = deliveryFee !== 0 ? `$${deliveryFee.toFixed(2)}` : "Free";

  return (
    <div className={styles.cart_summary_box}>
      <p className={styles.cart_summary_title}>Order Summary</p>
      <div className={styles.cart_summary_rows}>
        <div className={styles.cart_summary_row}>
          <p className={styles.cart_summary_row_text}>Subtotal</p>
          <p className={styles.cart_summary_row_price}>${cartTotalPrice.toFixed(2)}</p>
        </div>
        <div className={styles.cart_summary_row}>
          <p className={styles.cart_summary_row_text}>Discount</p>
          <p className={`${styles.cart_summary_row_price} ${styles.discount}`}>
            -${cartTotalDiscountPrice.toFixed(2)}
          </p>
        </div>
        <div className={styles.cart_summary_row}>
          <p className={styles.cart_summary_row_text}>Delivery Fee</p>
          <p className={styles.cart_summary_row_price}>{feeForDelivery}</p>
        </div>
        <hr />
      </div>
      <div className={styles.last_row}>
        <p className={styles.last_row_text}>Total</p>
        <p className={styles.last_row_price}>${(cartTotal + deliveryFee).toFixed(2)}</p>
      </div>
      <div className={styles.cart_summary_promocode}>
        <div className={styles.promocode}>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.0766 10.4857L11.7653 1.17444C11.5917 0.999696 11.3851 0.861152 11.1576 0.766846C10.93 0.672541 10.686 0.62435 10.4397 0.625069H1.75001C1.45164 0.625069 1.16549 0.743595 0.954513 0.954574C0.743534 1.16555 0.625008 1.4517 0.625008 1.75007V10.4398C0.624289 10.6861 0.67248 10.9301 0.766785 11.1576C0.861091 11.3852 0.999635 11.5918 1.17438 11.7654L10.4856 21.0766C10.8372 21.4281 11.3141 21.6256 11.8113 21.6256C12.3084 21.6256 12.7853 21.4281 13.1369 21.0766L21.0766 13.1369C21.4281 12.7853 21.6255 12.3085 21.6255 11.8113C21.6255 11.3141 21.4281 10.8373 21.0766 10.4857ZM11.8113 19.2204L2.87501 10.2813V2.87507H10.2813L19.2175 11.8113L11.8113 19.2204ZM7.37501 5.87507C7.37501 6.17174 7.28703 6.46175 7.12221 6.70842C6.95739 6.9551 6.72312 7.14736 6.44903 7.26089C6.17494 7.37442 5.87334 7.40412 5.58237 7.34625C5.2914 7.28837 5.02413 7.14551 4.81435 6.93573C4.60457 6.72595 4.46171 6.45868 4.40383 6.1677C4.34595 5.87673 4.37566 5.57513 4.48919 5.30104C4.60272 5.02695 4.79498 4.79269 5.04165 4.62786C5.28833 4.46304 5.57834 4.37507 5.87501 4.37507C6.27283 4.37507 6.65436 4.5331 6.93567 4.81441C7.21697 5.09571 7.37501 5.47724 7.37501 5.87507Z"
              fill="black"
              fillOpacity="0.4"
            />
          </svg>
          <input type="text" placeholder="Add promo code" aria-label="Promo code bar" />
        </div>
        <button>Apply</button>
      </div>
      <button className={styles.finish_button}>Finish Order</button>
    </div>
  );
}

export default CartSummaryBox;
