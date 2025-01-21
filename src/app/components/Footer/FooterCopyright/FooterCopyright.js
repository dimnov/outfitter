import PaymentMethods from "../../Icons/PaymentMethods";
import styles from "./FooterCopyright.module.css";

function FooterCopyright() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.copyright}>
      <p>Outfitter &copy;2000-{currentYear}, All Rights Reserved</p>
      <div className={styles.payment_methods}>
        <PaymentMethods />
      </div>
    </footer>
  );
}

export default FooterCopyright;
