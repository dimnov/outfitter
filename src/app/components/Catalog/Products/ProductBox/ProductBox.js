import Image from "next/image";
import styles from "./ProductBox.module.css";

import StarScore from "@/app/components/Icons/StarScore";

function ProductBox({ product }) {
  const { title, image_url, price, score, discount_price } = product;

  const discountPercentage = ((price - discount_price) / price) * 100;

  return (
    <div className={styles.product_box}>
      <Image src={image_url} width={295} height={298} alt="tshirt" />
      <div className={styles.product_info}>
        <p className={styles.product_title}>{title}</p>
        <div className={styles.score_box}>
          <div className={styles.score_stars}>
            <StarScore score={score} />
          </div>
          <p className={styles.score_number}>{score}/5</p>
        </div>
        <div className={styles.product_price_box}>
          {discount_price !== 0 ? (
            <>
              <p className={styles.product_price}>${discount_price}</p>
              <p className={styles.product_price_discount}>${price}</p>
              <p className={styles.discount_percentage}>-{discountPercentage.toFixed(0)}%</p>
            </>
          ) : (
            <p className={styles.product_price}>${price}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
