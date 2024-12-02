import styles from "./ProductsGrid.module.css";
import ProductBox from "../ProductBox/ProductBox";

function ProductsGrid({ products }) {
  return (
    <div className={styles.products_grid}>
      {products?.map((product) => (
        <ProductBox key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsGrid;
