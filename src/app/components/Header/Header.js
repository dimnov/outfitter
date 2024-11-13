import Logo from "../Logo/Logo";
import styles from "./Header.module.css";
import HeaderCartAndProfile from "./HeaderCartAndProfile/HeaderCartAndProfile";
import HeaderNavigation from "./HeaderNavigation/HeaderNavigation";
import HeaderSearch from "./HeaderSearch/HeaderSearch";

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <HeaderNavigation />
      <HeaderSearch />
      <HeaderCartAndProfile />
    </header>
  );
}

export default Header;
