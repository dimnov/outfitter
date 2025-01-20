import styles from "./ProductSections.module.css";

function ProductSections() {
  return (
    <div className={styles.sections}>
      <button>Product Details</button>
      <button>Rating & Reviews</button>
      <button>FAQs</button>
    </div>
  );
}

export default ProductSections;
