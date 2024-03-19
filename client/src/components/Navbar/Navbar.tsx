import React from "react";
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import styles from "./Navbar.module.css";
import somosLogoWhite from "../../assets/somoLogo_white.png";
import somosLogo from "../../assets/somosLogo.png";
import Drawer from "./Drawer";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const showNavbar = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <header>
      <img src={somosLogo} className={styles.somosLogo} />
      <nav className={styles.navLinks}>
        <a href="/#">Home</a>
        <a href="/about">About</a>
        <a href="/#">Contact</a>
      </nav>

      <button className={styles.navBurger} onClick={showNavbar}>
        <FaBars />
      </button>

      {isOpen && (
        <Drawer handleDismiss={showNavbar}>
          <ul className={styles.navListSidebar}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </Drawer>
      )}
    </header>
  );
}
