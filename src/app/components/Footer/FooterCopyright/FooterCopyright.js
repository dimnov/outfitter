import Image from "next/image";
import styles from "./FooterCopyright.module.css";

const images = ["Visa.png", "MasterCard.png", "PayPal.png", "ApplePay.png", "GooglePay.png"];

function FooterCopyright() {
  return (
    <div className={styles.copyright}>
      <p>Outfitter &copy;2000-2024, All Rights Reserved</p>
      <div className={styles.payment_methods}>
        {images.map((image) => (
          <Image
            key={image}
            width={66}
            height={49}
            src={`/images/payment-methods/${image}`}
            alt={image}
          />
        ))}
      </div>
    </div>
  );
}

export default FooterCopyright;
