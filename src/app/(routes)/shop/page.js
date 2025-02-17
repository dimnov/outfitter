import styles from "./catalog.module.css";
import Breadcrumbs from "@/app/components/Catalog/Breadcrumbs/Breadcrumbs";
import Filters from "@/app/components/Catalog/Filters/Filters";
import Products from "@/app/components/Catalog/Products/Products";
import { getAllColors } from "@/app/lib/data-service";

async function page() {
  const { colors } = await getAllColors();

  return (
    <section className={styles.catalog}>
      <hr />
      <Breadcrumbs path={"Shop"} />
      <div className={styles.main}>
        <Filters colors={colors}/>
        <Products />
      </div>
    </section>
  );
}

export default page;
