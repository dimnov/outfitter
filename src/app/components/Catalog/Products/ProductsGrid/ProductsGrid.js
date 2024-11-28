import styles from "./ProductsGrid.module.css";

import ProductBox from "../ProductBox/ProductBox";

function ProductsGrid() {
  return (
    <div className={styles.products_grid}>
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
      <ProductBox />
    </div>
  );
}

export default ProductsGrid;
