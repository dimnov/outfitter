import Image from "next/image";
import styles from "./HomePage.module.css";

import Hero from "@/app/components/Home/Hero/Hero";
import Brands from "@/app/components/Home/Brands/Brands";
import HomeProducts from "@/app/components/Home/HomeProducts/HomeProducts";

function HomePage() {
  return (
    <main className={styles.home_page}>
      <Hero />
      <Brands />
      <HomeProducts />
      <section className={styles.section_categories}>
        <div className={styles.categories_container}>
          <header className={styles.categories_header}>BROWSE BY DRESS STYLE</header>
          <div className={styles.categories_grid}>
            <div className={styles.category_box}>
              <p>Casual</p>
            </div>
            <div className={styles.category_box}>
              <p>Formal</p>
            </div>
            <div className={styles.category_box}>
              <p>Party</p>
            </div>
            <div className={styles.category_box}>
              <p>Gym</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
