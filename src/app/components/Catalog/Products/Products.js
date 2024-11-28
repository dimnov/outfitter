import styles from "./Products.module.css";
import ProductsGrid from "./ProductsGrid/ProductsGrid";
import ProductsHeader from "./ProductsHeader/ProductsHeader";

function Products() {
  return (
    <div className={styles.products}>
      <ProductsHeader />
      <ProductsGrid />
    </div>
  );
}

export default Products;
