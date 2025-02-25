import Link from "next/link";
import styles from "./HeroHeader.module.css";

function HeroHeader() {
  return (
    <header className={styles.hero_header}>
      <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
      <p className={styles.hero_description}>
        Browse through our diverse range of meticulously crafted garments, designed to bring out
        your individuality and cater to your sense of style.
      </p>
      <Link href="shop" className={styles.shop_button} aria-label="Go to category page">
        Shop Now
      </Link>
    </header>
  );
}

export default HeroHeader;
