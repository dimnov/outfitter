import styles from "./HeroStats.module.css";

function Stats() {
  return (
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
  );
}

export default Stats;
