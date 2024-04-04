import React from "react";
import styles from "./HeroSection.module.css";
import somosLogo from "../../../assets/somoLogos/somosLogo.png";

import svgLogoLeft from "../../../assets/somoLogos/somos_cropped_left.svg";
import svgLogoRight from "../../../assets/somoLogos/somos_cropped_right.svg";

export default function HeroSection(): React.ReactElement {
  return (
    <section className={styles.heroSection}>
      <img
        src={svgLogoLeft}
        alt="somos svg banner"
        className={styles.svgLogoLeft}
      />

      <img
        src={svgLogoRight}
        alt="somos svg banner"
        className={styles.svgLogoRight}
      />

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
            <a
              href="https://forms.gle/WsK5CBuS5P22grjJ7"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactUsLink}
            >
              Connect With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
