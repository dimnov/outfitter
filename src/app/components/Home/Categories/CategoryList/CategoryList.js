import Link from "next/link";
import styles from "./CategoryList.module.css";
import Image from "next/image";

import casual from "@images/categories/casual.png";
import formal from "@images/categories/formal.png";
import party from "@images/categories/party.png";
import gym from "@images//categories/gym.png";

const categories = [
  { id: "casual", src: casual, alt: "Casual category" },
  { id: "formal", src: formal, alt: "Formal category" },
  { id: "party", src: party, alt: "Party category" },
  { id: "gym", src: gym, alt: "Gym category" },
];

function CategoryList() {
  return (
    <ul className={styles.categories_grid}>
      {categories.map((cat) => (
        <li key={cat.id} className={`${styles.category_box} ${styles[cat.id]}`}>
          <Link href="#">
            <Image unoptimized src={cat.src} alt={cat.alt} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
