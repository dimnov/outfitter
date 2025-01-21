import styles from "./HomeProducts.module.css";
import Image from "next/image";

import tshirt from "/public/images/products/tshirt.png";
import Link from "next/link";

function HomeProducts() {
  // Here separate each box_products div, and each of them will receive an array with products from here
  return (
    <section className={styles.home_products}>
      {/* NEW ARRIVALS */}
      <div className={styles.box_products}>
        <p className={styles.box_products_title}>NEW ARRIVALS</p>
        <ul className={styles.box_products_list}>
          <li className={styles.product_item}>
            <Image unoptimized src={tshirt} alt={"asd"} />
            <p className={styles.product_item_title}>T-shirt with Tape Details</p>
            {/* <p className={styles.product_item_score}>score</p> */}
            <p className={styles.product_item_price}>$120</p>
          </li>
          <li className={styles.product_item}>
            <Image unoptimized src={tshirt} alt={"asd"} />
            <p className={styles.product_item_title}>T-shirt with Tape Details</p>
            {/* <p className={styles.product_item_score}>score</p> */}
            <p className={styles.product_item_price}>$120</p>
          </li>
          <li className={styles.product_item}>
            <Image unoptimized src={tshirt} alt={"asd"} />
            <p className={styles.product_item_title}>T-shirt with Tape Details</p>
            {/* <p className={styles.product_item_score}>score</p> */}
            <p className={styles.product_item_price}>$120</p>
          </li>
          <li className={styles.product_item}>
            <Image unoptimized src={tshirt} alt={"asd"} />
            <p className={styles.product_item_title}>T-shirt with Tape Details</p>
            {/* <p className={styles.product_item_score}>score</p> */}
            <p className={styles.product_item_price}>$120</p>
          </li>
        </ul>
        <Link href="#" className={styles.view_all_button}>
          View All
        </Link>
      </div>
      <div className={styles.brake}>
        <hr />
      </div>
      {/* TOP SELLING */}
      <div className={styles.box_products}>
        <p className={styles.box_products_title}>TOP SELLING</p>
        <ul className={styles.box_products_list}>
          <li className={styles.product_item}>
            <Image unoptimized src={tshirt} alt={"asd"} />
            <p className={styles.product_item_title}>T-shirt with Tape Details</p>
            {/* <p className={styles.product_item_score}>score</p> */}
            <p className={styles.product_item_price}>$120</p>
          </li>
          <li className={styles.product_item}>
            <Image unoptimized src={tshirt} alt={"asd"} />
            <p className={styles.product_item_title}>T-shirt with Tape Details</p>
            {/* <p className={styles.product_item_score}>score</p> */}
            <p className={styles.product_item_price}>$120</p>
          </li>
          <li className={styles.product_item}>
            <Image unoptimized src={tshirt} alt={"asd"} />
            <p className={styles.product_item_title}>T-shirt with Tape Details</p>
            {/* <p className={styles.product_item_score}>score</p> */}
            <p className={styles.product_item_price}>$120</p>
          </li>
          <li className={styles.product_item}>
            <Image unoptimized src={tshirt} alt={"asd"} />
            <p className={styles.product_item_title}>T-shirt with Tape Details</p>
            {/* <p className={styles.product_item_score}>score</p> */}
            <p className={styles.product_item_price}>$120</p>
          </li>
        </ul>
        <a href="#" className={styles.view_all_button}>
          View All
        </a>
      </div>
    </section>
  );
}

export default HomeProducts;
