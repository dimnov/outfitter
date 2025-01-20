import ProductPriceBox from "../../Catalog/Products/ProductPriceBox/ProductPriceBox";
import StarScore from "../../Icons/StarScore";
import styles from "./ProductDetails.module.css";

function ProductDetails({ product }) {
  const { title, description, discount_price, price, image_url, score } = product;

  return (
    <div className={styles.product_details}>
      <h3>{title}</h3>
      <StarScore size={24} score={score} />
      <ProductPriceBox discount_price={discount_price} price={price} className={styles.fontSize} />
      <p className={styles.description}>{description}</p>
      <hr />
      <div className={styles.colors}>
        <p>Select Colors</p>
        <ul className={styles.colors_list}>
          <li>
            <svg
              className={styles.svg_base}
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18.5" cy="18.5" r="18.5" fill="#314F4A" />
            </svg>
          </li>
          <li>
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18.5" cy="18.5" r="18.5" fill="#314F4A" />
            </svg>
          </li>
          <li>
            <svg
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="18.5" cy="18.5" r="18.5" fill="#314F4A" />
            </svg>
          </li>
        </ul>
      </div>
      <hr />
      <div className={styles.sizes}>
        <p>Choose Size</p>
        <ul className={styles.sizes_list}>
          <li>Small</li>
          <li>Medium</li>
          <li className={styles.active}>Large</li>
          <li>X-Large</li>
        </ul>
      </div>
      <hr />
      <div className={styles.buttons}>
        <div className={styles.quantity}>
          <button>
            <svg
              width="20"
              height="4"
              viewBox="0 0 20 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.375 2C19.375 2.29837 19.2565 2.58452 19.0455 2.79549C18.8345 3.00647 18.5484 3.125 18.25 3.125H1.75C1.45163 3.125 1.16548 3.00647 0.954505 2.79549C0.743526 2.58452 0.625 2.29837 0.625 2C0.625 1.70163 0.743526 1.41548 0.954505 1.2045C1.16548 0.993526 1.45163 0.875 1.75 0.875H18.25C18.5484 0.875 18.8345 0.993526 19.0455 1.2045C19.2565 1.41548 19.375 1.70163 19.375 2Z"
                fill="black"
              />
            </svg>
          </button>
          <p>1</p>
          <button>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.375 10C19.375 10.2984 19.2565 10.5845 19.0455 10.7955C18.8345 11.0065 18.5484 11.125 18.25 11.125H11.125V18.25C11.125 18.5484 11.0065 18.8345 10.7955 19.0455C10.5845 19.2565 10.2984 19.375 10 19.375C9.70163 19.375 9.41548 19.2565 9.2045 19.0455C8.99353 18.8345 8.875 18.5484 8.875 18.25V11.125H1.75C1.45163 11.125 1.16548 11.0065 0.954505 10.7955C0.743526 10.5845 0.625 10.2984 0.625 10C0.625 9.70163 0.743526 9.41548 0.954505 9.2045C1.16548 8.99353 1.45163 8.875 1.75 8.875H8.875V1.75C8.875 1.45163 8.99353 1.16548 9.2045 0.954505C9.41548 0.743526 9.70163 0.625 10 0.625C10.2984 0.625 10.5845 0.743526 10.7955 0.954505C11.0065 1.16548 11.125 1.45163 11.125 1.75V8.875H18.25C18.5484 8.875 18.8345 8.99353 19.0455 9.2045C19.2565 9.41548 19.375 9.70163 19.375 10Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
        <button className={styles.buttons_add}>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetails;
