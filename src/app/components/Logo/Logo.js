import Link from "next/link";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link className={styles.logo} href="/">
      OUTFITTER
    </Link>
  );
}

export default Logo;
