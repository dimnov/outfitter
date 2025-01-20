import styles from "./ProductOffers.module.css";

function ProductOffers() {
  return (
    <div className={styles.product_offers}>
      <header>You might also like</header>
      <div className={styles.product_offers_products}>
        <div>box 1</div>
        <div>box 2</div>
        <div>box 3</div>
        <div>box 4</div>
      </div>
    </div>
  );
}

export default ProductOffers;
