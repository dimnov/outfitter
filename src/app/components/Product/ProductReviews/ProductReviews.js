import styles from "./ProductReviews.module.css";

function ProductReviews() {
  return (
    <div className={styles.product_reviews}>
      <div className={styles.product_reviews_header}>
        <p>All Reviews</p>
        <div className={styles.product_reviews_header_buttons}>
          <button>icon</button>
          <button>Latest</button>
          <button>Write a Review</button>
        </div>
      </div>
      <div className={styles.product_reviews_comments}>
        <div>box 1</div>
        <div>box 2</div>
        <div>box 3</div>
      </div>
      <button>Load More Reviews</button>
    </div>
  );
}

export default ProductReviews;
