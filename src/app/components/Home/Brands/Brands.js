import { getAllImagesFromFolder } from "@/app/lib/data-service";
import styles from "./Brands.module.css";

async function Brands() {
  const brands = await getAllImagesFromFolder("brands");

  return (
    <section className={styles.section_brands}>
      <ul className={styles.brands_list}>
        {brands.map((brand) => (
          <li key={brand.name} className={styles.brand_item}>
            <img src={brand.imageUrl} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Brands;
