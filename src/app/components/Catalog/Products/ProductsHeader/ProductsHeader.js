import styles from "./ProductsHeader.module.css";
import SortList from "./SortList/SortList";

function ProductsHeader({ totalPerPage, totalCount, setSortBy }) {
  return (
    <header className={styles.header}>
      <h2>Products</h2>
      <div className={styles.options}>
        <p>
          Showing 1-{totalPerPage} of {totalCount} Products
        </p>

        <SortList setSortBy={setSortBy} />
      </div>
    </header>
  );
}

export default ProductsHeader;
