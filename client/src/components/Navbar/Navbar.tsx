import React from "react";
import { FaBars } from "react-icons/fa";
import { FaLinkedin, FaInstagram, FaBookmark } from "react-icons/fa";
import substackIcon from "../../assets/brandLogos/substack.svg";

import styles from "./Navbar.module.css";
import somosLogo from "../../assets/somoLogos//somosLogo.png";
import Drawer from "./Drawer";
import { Link } from "react-router-dom";

// import { FaAngleRight, FaAngleDown } from "react-icons/fa";

import useEvents from "../../hooks/useEvents";

export default function Navbar() {
  const { loadInformation: loadEventsInformation } = useEvents();

  const [isOpen, setIsOpen] = React.useState(false);

  // const [isEventSubMenuOpen, setIsEventSubMenuOpen] = React.useState(false);

  const showNavbar = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  React.useEffect(() => {
    loadEventsInformation();
  }, []);

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
        <span>
          <Link
            className={`${styles.mainSubMenuItemLink}`}
            to="/events"
            reloadDocument
          >
            {" "}
            Events{" "}
          </Link>
          {/* <ul className={styles.desktopNavLinks}> */}
          {/*     <li> */}
          {/*       <Link to="/events" reloadDocument> */}
          {/*         Events */}
          {/*       </Link> */}
          {/*     </li> */}
          {/*     <li> */}
          {/*       <Link to="/events/register" reloadDocument> */}
          {/*         Register Event */}
          {/*       </Link> */}
          {/*     </li> */}
          {/*   </ul> */}
        </span>
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
            {/* <li> */}
            {/*   <p */}
            {/*     className={`${styles.mainSubMenuSubContent}`} */}
            {/*     onClick={() => setIsEventSubMenuOpen(!isEventSubMenuOpen)} */}
            {/*   > */}
            {/*     <span>Events</span>{" "} */}
            {/*     {isEventSubMenuOpen ? <FaAngleDown /> : <FaAngleRight />} */}
            {/*   </p> */}
            {/*   {isEventSubMenuOpen && ( */}
            {/*     <ul className={styles.containerSubMenu}> */}
            {/*       <li> */}
            {/*         <Link to="/events" reloadDocument> */}
            {/*           Events List */}
            {/*         </Link> */}
            {/*       </li> */}
            {/*       <li> */}
            {/*         <Link to="/events/register" reloadDocument> */}
            {/*           Register Event */}
            {/*         </Link> */}
            {/*       </li> */}
            {/*     </ul> */}
            {/*   )} */}
            {/* </li> */}
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
            <a
              href="https://substack.com/@somoscentralcoasttechassoc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBookmark aria-label="Substack" />
            </a>
          </div>
        </Drawer>
      )}
    </header>
  );
}
