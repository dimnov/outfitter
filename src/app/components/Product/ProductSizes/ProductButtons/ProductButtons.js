import ProductQuantity from "../../ProductQuantity/ProductQuantity";
import styles from "./ProductButtons.module.css";

function ProductButtons({ quantity, onClick }) {
  return (
    <div className={styles.buttons}>
      <ProductQuantity selectedQuantity={quantity} onClick={onClick} />
      <button className={styles.buttons_add}>Add to Cart</button>
    </div>
  );
}

export default ProductButtons;
