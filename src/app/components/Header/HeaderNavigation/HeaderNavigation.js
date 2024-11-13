import styles from "./HeaderNavigation.module.css";

function HeaderNavigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">On Sale</a>
        </li>
        <li>
          <a href="#">New Arrivals</a>
        </li>
        <li>
          <a href="#">Brands</a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
