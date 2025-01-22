import ProductDetails from "../ProductDetails/ProductDetails";
import ProductImageGrid from "../ProductImageGrid/ProductImageGrid";
import styles from "./ProductContainer.module.css";

function ProductContainer({ images, productData }) {
  return (
    <div className={styles.product_container}>
      <ProductImageGrid images={images} />
      <ProductDetails productData={productData} />
    </div>
  );
}

export default ProductContainer;
