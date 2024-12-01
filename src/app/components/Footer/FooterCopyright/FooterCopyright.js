import PaymentMethods from "../../Icons/PaymentMethods";
import styles from "./FooterCopyright.module.css";

function FooterCopyright() {
  return (
    <footer className={styles.copyright}>
      <p>Outfitter &copy;2000-2024, All Rights Reserved</p>
      <div className={styles.payment_methods}>
        <PaymentMethods />
      </div>
    </footer>
  );
}

export default FooterCopyright;
