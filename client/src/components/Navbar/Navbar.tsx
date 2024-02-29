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

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const showNavbar = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <header>
      <img src={somosLogoWhite} className={styles.somosLogo} />
      <nav className={isOpen ? styles.navOpen : ""}>
        <a href="#" className={styles.logoLinkSidebar}>
          <img
            alt="Somos Logo"
            src={somosLogoWhite}
            className={styles.somosLogoSidebar}
          />
        </a>
        <a href="/#">Home</a>
        <a href="/#">About</a>
        <a href="/#">Contact</a>

        <button
          className={`${styles.navBurger} ${styles.navCloseBtn}`}
          onClick={showNavbar}
        >
          <FaTimes />
        </button>

        <div className={styles.socialLogos}>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaTiktok />
          </a>
        </div>
      </nav>

      <button className={styles.navBurger} onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}
