import styles from "./Footer.module.css";

import somosLogo from "../../assets/somoLogos/SOMOS-LOGOS-04.png";
import { FaInstagram } from "react-icons/fa";
import linkedInIcon from "../../assets/brandLogos/linkedin.svg";
import substackIcon from "../../assets/brandLogos/substack.svg";
import discordIcon from "../../assets/brandLogos/discord.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className={styles.contentContainer}>
        <div className={styles.topContainer}>
          <div className={styles.somosColumnContainer}>
            <div className={styles.somosContainer}>
              <figure className={styles.somosLogoContainer}>
                <img
                  src={somosLogo}
                  alt="somos logo"
                  className={styles.somosLogo}
                />
              </figure>
            </div>

            <h4 className={styles.footerText}>
              Central Coast Tech Association
            </h4>
          </div>

          <div className={styles.siteDirContainer}>
            <h4>Sitemap</h4>

            <ul className={styles.siteDirList}>
              <li className={styles.siteDirListItem}>
                <Link to="/" reloadDocument>
                  Home
                </Link>
              </li>

              <li className={styles.siteDirListItem}>
                <Link to="/about" reloadDocument>
                  About
                </Link>
              </li>

              <li className={styles.siteDirListItem}>
                <Link to="/events" reloadDocument>
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.socialsContainer}>
            <h4>Follow Us</h4>

            <div className={styles.socialListContainer}>
              <a
                href="https://www.instagram.com/somostechassociation?igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className={styles.socialIcons} />
              </a>
              <a
                href="https://substack.com/@somoscentralcoasttechassoc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="substack icon"
                  className={styles.socialIcons}
                  src={substackIcon}
                />
              </a>
              <a
                href="https://discord.com/invite/ZP8Jr6fJan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="discord icon"
                  className={styles.socialIcons}
                  src={discordIcon}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/98805767/admin/feed/posts/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="linkedin icon"
                  className={styles.socialIcons}
                  src={linkedInIcon}
                />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.copyrightContainer}>
          <p>&copy; 2024 SOMOS</p>
        </div>
      </div>
    </footer>
  );
}
