import styles from "./ProductImageGrid.module.css";

function ProductImageGrid() {
  return (
    <ul className={styles.product_images}>
      <li className={`${styles.product_images_item} ${styles.small} ${styles.active}`}>
        <img src="https://cngeboyvccurpfdvorce.supabase.co/storage/v1/object/public/products/tshirt.png" />
      </li>
      <li className={`${styles.product_images_item} ${styles.small}`}>
        <img src="https://cngeboyvccurpfdvorce.supabase.co/storage/v1/object/public/products/tshirt.png" />
      </li>
      <li className={`${styles.product_images_item} ${styles.small}`}>
        <img src="https://cngeboyvccurpfdvorce.supabase.co/storage/v1/object/public/products/tshirt.png" />
      </li>
      <li className={`${styles.product_images_item} ${styles.large}`}>
        <img src="https://cngeboyvccurpfdvorce.supabase.co/storage/v1/object/public/products/tshirt.png" />
      </li>
    </ul>
  );
}

export default ProductImageGrid;
