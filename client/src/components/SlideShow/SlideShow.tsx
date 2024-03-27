import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./SlideShow.module.css";

import aiSanFranPhoto from "../../assets/slideshowImages/somos_ai_sanfrancisco.jpeg";
import reunionPresentationPhoto from "../../assets/slideshowImages/somos_reunion_presentation.jpeg";
import carmelMarketPhoto from "../../assets/slideshowImages/somos_carmel_market.png";
import hartnellGroupPhoto from "../../assets/slideshowImages/somos_hartnell_group.png";
import julioTourPhoto from "../../assets/slideshowImages/somos_julio_tour.jpeg";
import remarkableAIPhoto from "../../assets/slideshowImages/somos_remarkable_ai.png";

export default function SlideShow() {
  const photos = [
    aiSanFranPhoto,
    reunionPresentationPhoto,
    carmelMarketPhoto,
    hartnellGroupPhoto,
    julioTourPhoto,
    remarkableAIPhoto,
  ];

  return (
    <Fade>
      <div className={styles.slide}>
        <div className={styles.photoContainer}>
          <img src={photos[0]} alt="" />
        </div>
      </div>

      <div className={styles.slide}>
        <div>
          <img src={photos[1]} alt="" />
        </div>
      </div>

      <div className={styles.slide}>
        <div>
          <img src={photos[2]} alt="" />
        </div>
      </div>

      <div className={styles.slide}>
        <div>
          <img src={photos[3]} alt="" />
        </div>
      </div>

      <div className={styles.slide}>
        <div>
          <img src={photos[4]} alt="" />
        </div>
      </div>
    </Fade>
  );
}
