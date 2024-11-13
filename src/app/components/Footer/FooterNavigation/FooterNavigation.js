import Image from "next/image";
import styles from "./FooterNavigation.module.css";
import Logo from "../../Logo/Logo";

const socials = ["Twitter.png", "Facebook.png", "Instagram.png", "Github.png"];

function FooterNavigation() {
  return (
    <div className={styles.navigation}>
      <div className={` ${styles.navigation_left}`}>
        <Logo />
        <p>
          We have clothes that suits your style and which you’re proud to wear. From women to men.
        </p>
        <div className={styles.navigation_socials}>
          {socials.map((social) => (
            <a key={social} href="#">
              <Image width={28} height={28} src={`/images/socials/${social}`} alt={social} />
            </a>
          ))}
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
            <a href="#">Customer Support</a>
          </li>
          <li>
            <a href="#">Delivery Details</a>
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
            <a href="#">Manage Deliveries</a>
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
            <a href="#">Development Tutorial</a>
          </li>
          <li>
            <a href="#">How to - Blog</a>
          </li>
          <li>
            <a href="#">Youtube Playlist</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FooterNavigation;
