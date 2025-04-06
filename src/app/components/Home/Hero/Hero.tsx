import styles from "./Hero.module.css";

import HeroHeader from "./HeroHeader/HeroHeader";
import Stats from "./HeroStats/HeroStats";

function Hero() {
  return (
    <section className={styles.section_hero}>
      <HeroHeader />
      <Stats />
    </section>
  );
}

export default Hero;
