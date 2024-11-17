import Image from "next/image";
import styles from "./FooterCopyright.module.css";

import visa from "/public/images/payment-methods/Visa.png";
import mastercard from "/public/images/payment-methods/MasterCard.png";
import paypal from "/public/images/payment-methods/PayPal.png";
import applepay from "/public/images/payment-methods/ApplePay.png";
import googlepay from "/public/images/payment-methods/GooglePay.png";

const paymentMethods = [
  { src: visa, alt: "Visa Logo" },
  { src: mastercard, alt: "MasterCard Logo" },
  { src: paypal, alt: "PayPal Logo" },
  { src: applepay, alt: "Apple Pay Logo" },
  { src: googlepay, alt: "Google Pay Logo" },
];

function FooterCopyright() {
  return (
    <footer className={styles.copyright}>
      <p>Outfitter &copy;2000-2024, All Rights Reserved</p>
      <div className={styles.payment_methods}>
        {paymentMethods.map((method, index) => (
          <Image key={index} layout="intrinsic" src={method.src} alt={method.alt} />
        ))}
      </div>
    </footer>
  );
}

export default FooterCopyright;
