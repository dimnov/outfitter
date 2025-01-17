import styles from "./ProductPriceBox.module.css";

function ProductPriceBox({ price, discountPercentage, discount_price, className = "" }) {
  return (
    <div className={`${styles.product_price_box} ${className}`}>
      {discount_price !== 0 ? (
        <>
          <p className={styles.product_price}>${discount_price}</p>
          <p className={styles.product_price_discount}>${price}</p>
          <p className={styles.discount_percentage}>-{discountPercentage.toFixed(0)}%</p>
        </>
      ) : (
        <p className={styles.product_price}>${price}</p>
      )}
    </div>
  );
}

export default ProductPriceBox;
