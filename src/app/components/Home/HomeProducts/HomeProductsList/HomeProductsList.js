import styles from "./HomeProductsList.module.css";
import StarScore from "@/app/components/Icons/StarScore";
import Image from "next/image";
import Link from "next/link";

function HomeProductsList({ products = [], title, path = "#" }) {
  return (
    <div className={styles.box_products}>
      <p className={styles.box_products_title}>{title}</p>
      <ul className={styles.box_products_list}>
        {products.map((product) => (
          <li className={styles.product_item} key={product.id}>
            <Link href={`products/${product.id}`}>
              <Image width={295} height={298} src={product?.image_url} alt={product.title} />
            </Link>
            <p className={styles.product_item_title}>{product.title}</p>
            <StarScore score={product.score} size={19} />
            <p className={styles.product_item_price}>${product.price}</p>
          </li>
        ))}
      </ul>
      <Link href={path} className={styles.view_all_button}>
        View All
      </Link>
    </div>
  );
}

export default HomeProductsList;
