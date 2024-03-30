import React from "react";
import styles from "./HeroSection.module.css";
import SlideShow from "../../../components/SlideShow/SlideShow";
import PhotoGrid from "../../../components/PhotoGrid/PhotoGrid";
import Carousel from "../../../components/Carousel/Carousel";

export default function HeroSection(): React.ReactElement {
  return (
    <section className={styles.heroSection}>
      <div className={styles.headingsContainer}>
        <h1 className={styles.heading}>
          Central Coast
          <br /> Tech Association
        </h1>

        <div className={styles.subheadingContainer}>
          <p className={styles.subheading}>
            uis nosturd exercitation ullamco laboris nisi ut allquip ex ea
            commodo condequeat. Duis aute irure dolor in
          </p>

          <button className={styles.heroBtn}>Learn more</button>
        </div>
      </div>

      <Carousel />
    </section>
  );
}
