import styles from "./ProductSectionsButton.module.css";

function ProductSectionsButton({ text, value, isActive, onClick }) {
  return (
    <button
      className={`${styles.btn} ${isActive ? styles.active : ""}`}
      onClick={() => onClick(value)}
    >
      {text}
    </button>
  );
}

export default ProductSectionsButton;
