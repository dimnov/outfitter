import Link from "next/link";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link className={styles.logo} href="/" aria-label="Store logo">
      OUTFITTER
    </Link>
  );
}

export default Logo;
