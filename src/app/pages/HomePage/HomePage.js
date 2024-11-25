import styles from "./HomePage.module.css";

import Hero from "@/app/components/Home/Hero/Hero";
import Brands from "@/app/components/Home/Brands/Brands";
import HomeProducts from "@/app/components/Home/HomeProducts/HomeProducts";
import Categories from "@/app/components/Home/Categories/Categories";

function HomePage() {
  return (
    <main className={styles.home_page}>
      <Hero />
      <Brands />
      <HomeProducts />
      <Categories />
    </main>
  );
}

export default HomePage;
