import React from "react";
import { FaBars } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";

import styles from "./Navbar.module.css";
import somosLogo from "../../assets/somoLogos//somosLogo.png";
import Drawer from "./Drawer";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const showNavbar = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <header>
      <Link to="/" reloadDocument>
        <img
          src={somosLogo}
          alt="Purple somos logo"
          className={styles.somosLogo}
        />
      </Link>

      <nav role="navigation" className={styles.navLinks}>
        <Link to="/" reloadDocument>
          Home
        </Link>
        <Link to="/events" reloadDocument>
          Events
        </Link>
        <Link to="/about" reloadDocument>
          About
        </Link>
      </nav>

      <button
        aria-label="Main Menu"
        aria-expanded={isOpen}
        className={styles.navBurger}
        onClick={showNavbar}
      >
        <FaBars aria-label="Main Menu" focusable="false" tabIndex={0} />
      </button>

      {isOpen && (
        <Drawer handleDismiss={showNavbar}>
          <ul className={styles.navListSidebar}>
            <li>
              <Link to="/" reloadDocument>
                Home
              </Link>
            </li>
            <li>
              <Link to="/events" reloadDocument>
                Events
              </Link>
            </li>
            <li>
              <Link to="/about" reloadDocument>
                About
              </Link>
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
