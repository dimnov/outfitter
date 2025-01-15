import styles from "./ProductsGrid.module.css";
import ProductBox from "../ProductBox/ProductBox";
import Link from "next/link";

function ProductsGrid({ products }) {
  return (
    <div className={styles.products_grid}>
      {products?.map((product) => (
        <Link href={`/products/${product.id}`} key={product.id}>
          <ProductBox product={product} />
        </Link>
      ))}
    </div>
  );
}

export default ProductsGrid;
