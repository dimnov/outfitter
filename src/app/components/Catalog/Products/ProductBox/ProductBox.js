import Image from "next/image";
import styles from "./ProductBox.module.css";

import tshirt from "@images/products/tshirt.png";

function ProductBox() {
  return (
    <div className={styles.product_box}>
      <Image src={tshirt} layout="intrinsic" alt="tshirt" />
      <div className={styles.product_info}>
        <p className={styles.product_title}>Gradient Graphic T-shirt</p>
        {/* score */}
        <p className={styles.product_price}>$145</p>
      </div>
    </div>
  );
}

export default ProductBox;
