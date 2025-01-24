import styles from "./HomeProducts.module.css";
import { getProductsByCriteria } from "@/app/lib/data-service";
import HomeProductsList from "./HomeProductsList/HomeProductsList";

async function HomeProducts() {
  const { products: newProducts } = await getProductsByCriteria("latest", "desc", 8);
  const { products: bestSellingProducts } = await getProductsByCriteria("sold", "desc", 8);

  return (
    <section className={styles.home_products}>
      <HomeProductsList
        products={newProducts}
        title={"NEW ARRIVALS"}
        path={"/shop?category=party"}
      />
      <div className={styles.brake}>
        <hr />
      </div>
      <HomeProductsList
        products={bestSellingProducts}
        title={"TOP SELLING"}
        path={"/shop?category=party"}
      />
    </section>
  );
}

export default HomeProducts;
