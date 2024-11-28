import Breadcrumb from "@/app/components/Catalog/Breadcrumb/Breadcrumb";
import styles from "./catalog.module.css";

import Filters from "@/app/components/Catalog/Filters/Filters";
import Products from "@/app/components/Catalog/Products/Products";

function page() {
  return (
    <section className={styles.catalog}>
      <hr />
      <Breadcrumb />
      <div className={styles.main}>
        <Filters />
        <Products />
      </div>
    </section>
  );
}

export default page;
