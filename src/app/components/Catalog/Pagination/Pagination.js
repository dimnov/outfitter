import styles from "./Pagination.module.css";

function Pagination() {
  return (
    <div className={styles.pagination}>
      <button className={styles.button}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8332 6.99996H1.1665M1.1665 6.99996L6.99984 12.8333M1.1665 6.99996L6.99984 1.16663"
            stroke="black"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>Previous</span>
      </button>
      <ul className={styles.pages_list}>
        <li className={`${styles.page} ${styles.active}`}>1</li>
        <li className={styles.page}>2</li>
        <li className={styles.page}>3</li>
      </ul>
      <button className={styles.button}>
        <span>Next</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.1665 6.99996H12.8332M12.8332 6.99996L6.99984 1.16663M12.8332 6.99996L6.99984 12.8333"
            stroke="black"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default Pagination;
