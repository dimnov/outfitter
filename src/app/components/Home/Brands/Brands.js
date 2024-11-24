import styles from "./Brands.module.css";
import Image from "next/image";

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

function Brands() {
  return (
    <section className={styles.section_brands}>
      <ul className={styles.brands_list}>
        {brandImages.map((brand, index) => (
          <li key={index} className={styles.brand_item}>
            <Image layout="intrinsic" src={brand.src} alt={brand.alt} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Brands;
