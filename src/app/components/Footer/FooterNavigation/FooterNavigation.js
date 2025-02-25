import Logo from "../../Logo/Logo";
import Socials from "../../Icons/Socials";
import styles from "./FooterNavigation.module.css";

function FooterNavigation() {
  return (
    <div className={styles.navigation}>
      <div className={` ${styles.navigation_left}`}>
        <Logo />
        <p>
          We have clothes that suits your style and which you’re proud to wear. From women to men.
        </p>
        <div className={styles.navigation_socials}>
          <Socials />
        </div>
      </div>
      <div className={styles.navigation_column}>
        <p>COMPANY</p>
        <ul>
          <li>
            <a href="#" aria-label="Visit About page">
              About
            </a>
          </li>
          <li>
            <a href="#" aria-label="Visit Features page">
              Features
            </a>
          </li>
          <li>
            <a href="#" aria-label="Visit Works page">
              Works
            </a>
          </li>
          <li>
            <a href="#" aria-label="Visit Career page">
              Career
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.navigation_column}>
        <p>HELP</p>
        <ul>
          <li>
            <a href="#" aria-label="Visit Support page">
              Support
            </a>
          </li>
          <li>
            <a href="#" aria-label="Visit Delivery page">
              Delivery
            </a>
          </li>
          <li>
            <a href="#" aria-label="Visit Terms & Conditions page">
              Terms & Conditions
            </a>
          </li>
          <li>
            <a href="#" aria-label="Visit Privacy Policy page">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.navigation_column}>
        <p>FAQ</p>
        <ul>
          <li>
            <a href="#" aria-label="Visit Account page">
              Account
            </a>
          </li>
          <li>
            <a href="#" aria-label="Visit Deliveries page">
              Deliveries
            </a>
          </li>
          <li>
            <a href="#" aria-label="Visit Orders page">
              Orders
            </a>
          </li>
          <li>
            <a href="#" aria-label="Visit Payments page">
              Payments
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.navigation_column}>
        <p>RESOURCES</p>
        <ul>
          <li>
            <a href="#" aria-label="Visit Free eBooks page">
              Free eBooks
            </a>
          </li>
          <li>
            <a href="#" aria-label="Visit Development page">
              Development
            </a>
          </li>
          <li>
            <a href="#" aria-label="Visit Blog page">
              Blog
            </a>
          </li>
          <li>
            <a href="#" aria-label="Visit Playlist page">
              Playlist
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterNavigation;
