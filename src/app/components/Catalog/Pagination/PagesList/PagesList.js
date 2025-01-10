import styles from "./PagesList.module.css";

function PagesList({ onClick, currentPage, pages }) {
  return (
    <ul className={styles.pages_list}>
      {pages.map((pageNum) => (
        <li
          key={pageNum}
          className={`${styles.page} ${currentPage === pageNum ? styles.active : ""}`}
          onClick={() => onClick(pageNum)}
        >
          {pageNum}
        </li>
      ))}
    </ul>
  );
}

export default PagesList;
