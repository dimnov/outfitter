import styles from "./ProductsHeader.module.css";

function ProductsHeader({ totalPerPage, totalCount }) {
  return (
    <header className={styles.header}>
      <h2>Products</h2>
      <div className={styles.options}>
        <p>
          Showing 1-{totalPerPage} of {totalCount} Products
        </p>
        <div className={styles.sort}>
          <p>
            Sort by: <b>Most Popular</b>
          </p>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5306 1.53063L6.5306 6.53063C6.46092 6.60055 6.37813 6.65602 6.28696 6.69388C6.1958 6.73173 6.09806 6.75122 5.99935 6.75122C5.90064 6.75122 5.8029 6.73173 5.71173 6.69388C5.62057 6.65602 5.53778 6.60055 5.4681 6.53063L0.468098 1.53063C0.327202 1.38973 0.248047 1.19864 0.248047 0.999378C0.248047 0.80012 0.327202 0.609024 0.468098 0.468128C0.608994 0.327231 0.800091 0.248077 0.999348 0.248077C1.19861 0.248077 1.3897 0.327231 1.5306 0.468128L5.99997 4.9375L10.4693 0.467503C10.6102 0.326607 10.8013 0.247452 11.0006 0.247452C11.1999 0.247452 11.391 0.326607 11.5318 0.467503C11.6727 0.608399 11.7519 0.799496 11.7519 0.998753C11.7519 1.19801 11.6727 1.38911 11.5318 1.53L11.5306 1.53063Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default ProductsHeader;
