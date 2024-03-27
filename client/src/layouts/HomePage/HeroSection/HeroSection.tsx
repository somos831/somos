import React from "react";
import styles from "./HeroSection.module.css";
import SlideShow from "../../../components/SlideShow/SlideShow.tsx";

export default function HeroSection(): React.ReactElement {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSectionTextContainer}>
        <h1>
          Central Coast
          <br /> Tech Association
        </h1>
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
      </div>

      <button className={styles.heroBtn}>Learn more</button>

      <SlideShow />
    </section>
  );
}
