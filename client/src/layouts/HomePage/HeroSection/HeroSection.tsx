import React from "react";
import styles from "./HeroSection.module.css";
import { Link } from "react-router-dom";
import somosLogo from "../../../assets/logos/somosLogo.png";

export default function HeroSection(): React.ReactElement {
  return (
    <section className={styles.heroSection}>
      <div className={styles.headingsContainer}>
        <div className={styles.somosLogoContainer}>
          <img
            src={somosLogo}
            alt="Purple somos logo"
            className={styles.somosLogo}
          />
        </div>
        <h1 className={styles.heading}>Central Coast Tech Association</h1>

        <div className={styles.subheadingContainer}>
          <p className={styles.subheading}>
            Fostering community growth, and addressing societal challenges
            through mentorship, community-driven projects, and professional
            development
          </p>

          <div className={styles.buttonContainer}>
            <button className={styles.heroBtn}>Contact Us</button>

            <Link to={"/about"} className={`${styles.heroBtn} ${styles.link}`}>
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
