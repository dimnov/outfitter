import Image from "next/image";
import styles from "./HomePage.module.css";

import versace from "/public/images/brands/Versace.png";
import zara from "/public/images/brands/Zara.png";
import gucci from "/public/images/brands/Gucci.png";
import prada from "/public/images/brands/Prada.png";
import calvin from "/public/images/brands/Calvin.png";

const brandImages = [
  { src: versace, alt: "Versace Logo" },
  { src: zara, alt: "Zara Logo" },
  { src: gucci, alt: "Gucci Logo" },
  { src: prada, alt: "Prada Logo" },
  { src: calvin, alt: "Calvin Klein Logo" },
];

function HomePage() {
  return (
    <main className={styles.home_page}>
      {/* Hero Section */}
      <section className={styles.section_hero}>
        <header className={styles.hero_header}>
          <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
          <p>
            Browse through our diverse range of meticulously crafted garments, designed to bring out
            your individuality and cater to your sense of style.
          </p>
          <a href="#" className={styles.shop_now}>
            Shop Now
          </a>
        </header>

        {/* Stats Section */}
        <div className={styles.stats}>
          <div className={styles.stats_box}>
            <p className={styles.number}>200+</p>
            <p className={styles.text}>International Brands</p>
          </div>
          <div className={styles.stats_box}>
            <p className={styles.number}>2,000+</p>
            <p className={styles.text}>High-Quality Products</p>
          </div>
          <div className={styles.stats_box}>
            <p className={styles.number}>30,000+</p>
            <p className={styles.text}>Happy Customers</p>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className={styles.section_brands}>
        <ul className={styles.brands_list}>
          {brandImages.map((brand, index) => (
            <li key={index} className={styles.brand_item}>
              <Image layout="intrinsic" src={brand.src} alt={brand.alt} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default HomePage;
