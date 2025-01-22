import Image from "next/image";
import styles from "./ProductBox.module.css";

import StarScore from "@/app/components/Icons/StarScore";
import ProductPriceBox from "../ProductPriceBox/ProductPriceBox";

function ProductBox({ product }) {
  const { title, products_images, price, score, discount_price } = product;
  const productImage = products_images[0]?.image_url;

  return (
    <div className={styles.product_box}>
      <Image src={productImage || null} width={295} height={298} alt="tshirt" />
      <div className={styles.product_info}>
        <p className={styles.product_title}>{title}</p>
        <div className={styles.score_box}>
          <div className={styles.score_stars}>
            <StarScore size={18} score={score} />
          </div>
          <p className={styles.score_number}>{score}/5</p>
        </div>
        <ProductPriceBox discount_price={discount_price} price={price} />
      </div>
    </div>
  );
}

export default ProductBox;
