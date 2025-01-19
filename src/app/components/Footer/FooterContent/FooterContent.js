import styles from "./FooterContent.module.css";
import FooterNavigation from "../FooterNavigation/FooterNavigation";
import FooterCopyright from "../FooterCopyright/FooterCopyright";

function FooterContent() {
  return (
    <div className={styles.content}>
      <FooterNavigation />
      <FooterCopyright />
    </div>
  );
}

export default FooterContent;
