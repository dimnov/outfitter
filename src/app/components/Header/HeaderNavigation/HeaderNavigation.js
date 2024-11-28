import Link from "next/link";
import styles from "./HeaderNavigation.module.css";

function HeaderNavigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li>
          <Link href="/catalog">Shop</Link>
        </li>
        <li>
          <Link href="#">On Sale</Link>
        </li>
        <li>
          <Link href="#">New Arrivals</Link>
        </li>
        <li>
          <Link href="#">Brands</Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
