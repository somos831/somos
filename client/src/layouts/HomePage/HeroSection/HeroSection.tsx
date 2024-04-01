import React from "react";
import styles from "./HeroSection.module.css";
import { Link } from "react-router-dom";

export default function HeroSection(): React.ReactElement {
  return (
    <section className={styles.heroSection}>
      <div className={styles.headingsContainer}>
        <h1 className={styles.heading}>
          Central Coast Tech Association <br /> <span>SOMOS</span>
        </h1>

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
