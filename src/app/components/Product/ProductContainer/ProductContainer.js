import ProductDetails from "../ProductDetails/ProductDetails";
import ProductImageGrid from "../ProductImageGrid/ProductImageGrid";
import styles from "./ProductContainer.module.css";

function ProductContainer({ product }) {
  return (
    <div className={styles.product_container}>
      <ProductImageGrid />
      <ProductDetails product={product} />
    </div>
  );
}

export default ProductContainer;
