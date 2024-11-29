import styles from "./catalog.module.css";
import Breadcrumb from "@/app/components/Catalog/Breadcrumb/Breadcrumb";

import Filters from "@/app/components/Catalog/Filters/Filters";
import Pagination from "@/app/components/Catalog/Pagination/Pagination";
import Products from "@/app/components/Catalog/Products/Products";

function page() {
  return (
    <section className={styles.catalog}>
      <hr />
      <Breadcrumb />
      <div className={styles.main}>
        <Filters />
        <div>
          <Products />
          <hr />
          <Pagination />
        </div>
      </div>
    </section>
  );
}

export default page;
