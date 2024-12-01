import styles from "./CategoryList.module.css";
import CategoryItem from "../CategoryItem/CategoryItem";
import { getAllImages } from "@/app/lib/data-service";

async function CategoryList() {
  const categories = await getAllImages();

  return (
    <ul className={styles.categories_grid}>
      {categories.map((cat) => (
        <CategoryItem key={cat.name} cat={cat} />
      ))}
    </ul>
  );
}

export default CategoryList;
