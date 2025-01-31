import ProductDetails from "../ProductDetails/ProductDetails";
import ProductImageGrid from "../ProductImageGrid/ProductImageGrid";
import styles from "./ProductContainer.module.css";

function ProductContainer() {
  return (
    <div className={styles.product_container}>
      <ProductImageGrid />
      <ProductDetails />
    </div>
  );
}

export default ProductContainer;
