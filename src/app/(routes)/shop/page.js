import styles from "./catalog.module.css";
import Breadcrumbs from "@/app/components/Catalog/Breadcrumbs/Breadcrumbs";
import Filters from "@/app/components/Catalog/Filters/Filters";
import Products from "@/app/components/Catalog/Products/Products";

async function page() {
  return (
    <section className={styles.catalog}>
      <hr />
      <Breadcrumbs path={"Shop"} />
      <div className={styles.main}>
        <Filters />
        <Products />
      </div>
    </section>
  );
}

export default page;
