import styles from "./HeroHeader.module.css";

function HeroHeader() {
  return (
    <header className={styles.hero_header}>
      <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
      <p>
        Browse through our diverse range of meticulously crafted garments, designed to bring out
        your individuality and cater to your sense of style.
      </p>
      <a href="#" className={styles.shop_button}>
        Shop Now
      </a>
    </header>
  );
}

export default HeroHeader;
