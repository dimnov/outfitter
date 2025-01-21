import ProductDetails from "../ProductDetails/ProductDetails";
import ProductImageGrid from "../ProductImageGrid/ProductImageGrid";
import styles from "./ProductContainer.module.css";

function ProductContainer({ productData }) {
  return (
    <div className={styles.product_container}>
      <ProductImageGrid image={productData.image_url} />
      <ProductDetails productData={productData} />
    </div>
  );
}

export default ProductContainer;
