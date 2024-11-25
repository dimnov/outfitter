import styles from "./Categories.module.css";

import CategoryList from "./CategoryList/CategoryList";

function Categories() {
  return (
    <section className={styles.section_categories}>
      <div className={styles.categories_container}>
        <p className={styles.categories_header}>BROWSE BY DRESS STYLE</p>
        <CategoryList />
      </div>
    </section>
  );
}

export default Categories;
