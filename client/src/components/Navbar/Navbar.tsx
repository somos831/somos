import React from "react";
import styles from "./Navbar.module.css";
import SOMOSLogo from "../../../public/somosLogo.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [navOpen, setNavOpen] = React.useState(false);

  const showNavbar = () => {
    setNavOpen(!navOpen);
  };
  return (
    <nav className={styles.mainContainer}>
      <ul>
        <li>
          <a>
            <img className={styles.somosLogo} src={SOMOSLogo} />
          </a>
        </li>

        <li>
          <a href="#" className={styles.navLinks}>
            Home
          </a>
        </li>
        <li>
          <a href="#" className={styles.navLinks}>
            About
          </a>
        </li>
        <li>
          <a href="#" className={styles.navLinks}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

