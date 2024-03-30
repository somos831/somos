import React from "react";
import { FaBars } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import VisuallyHidden from "../VisuallyHidden/VisuallyHidden";
import styles from "./Navbar.module.css";
import somosLogo from "../../assets/logos/somosLogo.png";
import Drawer from "./Drawer";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const showNavbar = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <header>
      <img
        src={somosLogo}
        alt="Purple somos logo"
        className={styles.somosLogo}
      />
      <nav role="navigation" className={styles.navLinks}>
        <a href="/#">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>

      <button
        aria-label="Main Menu"
        aria-expanded={isOpen}
        className={styles.navBurger}
        onClick={showNavbar}
      >
        <FaBars aria-label="Main Menu" focusable="false" tabIndex={0} />
        <VisuallyHidden>Open Main Menu</VisuallyHidden>
      </button>

      {isOpen && (
        <Drawer handleDismiss={showNavbar}>
          <ul className={styles.navListSidebar}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>

          <div className={styles.socialLogos}>
            <a
              href="https://www.linkedin.com/company/somos-central-tech-association/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin aria-label="Linkedin" />
            </a>
            <a
              href="https://www.instagram.com/somostechassociation?igsh=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram aria-label="Instagram" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTiktok aria-label="Tiktok" />
            </a>
          </div>
        </Drawer>
      )}
    </header>
  );
}
