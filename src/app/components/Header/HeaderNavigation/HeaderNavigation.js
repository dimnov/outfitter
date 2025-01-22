import Link from "next/link";
import styles from "./HeaderNavigation.module.css";

const LINKS = [
  {
    path: "/shop",
    name: "Shop",
  },
  {
    path: "#",
    name: "On Sale",
  },
  {
    path: "#",
    name: "New Arrivals",
  },
];

function HeaderNavigation() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        {LINKS.map((link) => (
          <li key={link.name}>
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
