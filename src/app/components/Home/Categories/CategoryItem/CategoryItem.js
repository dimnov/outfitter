import styles from "./CategoryItem.module.css";
import Link from "next/link";

function CategoryItem({ cat }) {
  const [catName, _] = cat.name.split(".");

  return (
    <li key={catName} className={`${styles.category_box} ${styles[catName]}`}>
      <Link href={`/shop?style=${catName}`} aria-label={`See ${catName} products`}>
        <img src={cat.imageUrl} alt={`${catName} category`} />
      </Link>
    </li>
  );
}

export default CategoryItem;
