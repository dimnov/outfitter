import styles from "./Footer.module.css";
import FooterEmailBox from "./FooterEmailBox/FooterEmailBox";
import FooterContent from "./FooterContent/FooterContent";

function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterEmailBox />
      <FooterContent />
    </footer>
  );
}

export default Footer;
