import styles from "./ProductSizes.module.css";

function ProductSizes({ sizes, selectedSize, onClick }) {
  return (
    <div className={styles.sizes}>
      <p>Choose Size</p>
      <ul className={styles.sizes_list}>
        {sizes.map((size) => (
          <li
            key={size.value}
            className={selectedSize === size.value ? styles.active : ""}
            onClick={() => onClick("size", size.value)}
          >
            {size.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSizes;
