import { Versace, Zara, Gucci, Prada, CalvinKlein } from "../../../components/Icons/index";
import styles from "./Brands.module.css";

async function Brands() {
  return (
    <section className={styles.section_brands}>
      <div className={styles.brands_list}>
        <Versace />
        <Zara />
        <Gucci />
        <Prada />
        <CalvinKlein />
      </div>
    </section>
  );
}

export default Brands;
