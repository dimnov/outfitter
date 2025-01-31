import ProductQuantity from "../../ProductQuantity/ProductQuantity";
import styles from "./ProductButtons.module.css";

function ProductButtons({ quantity, onClickQuantity, onClickAddToCart }) {
  return (
    <div className={styles.buttons}>
      <ProductQuantity selectedQuantity={quantity} onClick={onClickQuantity} />
      <button className={styles.buttons_add} onClick={onClickAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductButtons;
