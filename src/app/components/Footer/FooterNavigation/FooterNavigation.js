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
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
        </ul>
      </div>
      <div className={styles.navigation_column}>
        <p>HELP</p>
        <ul>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Delivery</a>
          </li>
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className={styles.navigation_column}>
        <p>FAQ</p>
        <ul>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Deliveries</a>
          </li>
          <li>
            <a href="#">Orders</a>
          </li>
          <li>
            <a href="#">Payments</a>
          </li>
        </ul>
      </div>
      <div className={styles.navigation_column}>
        <p>RESOURCES</p>
        <ul>
          <li>
            <a href="#">Free eBooks</a>
          </li>
          <li>
            <a href="#">Development</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Playlist</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterNavigation;
