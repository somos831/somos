import React from "react";
import styles from "./PhotoGrid.module.css";

import aiSanFranPhoto from "../../assets/slideshowImages/somos_ai_sanfrancisco.jpeg";
import reunionPresentationPhoto from "../../assets/slideshowImages/somos_reunion_presentation.jpeg";
import carmelMarketPhoto from "../../assets/slideshowImages/somos_carmel_market.png";
import hartnellGroupPhoto from "../../assets/slideshowImages/somos_hartnell_group.png";
import julioTourPhoto from "../../assets/slideshowImages/somos_julio_tour.jpeg";
import remarkableAIPhoto from "../../assets/slideshowImages/somos_remarkable_ai.png";

export default function PhotoGrid() {
  const photos = [
    aiSanFranPhoto,
    reunionPresentationPhoto,
    carmelMarketPhoto,
    hartnellGroupPhoto,
    julioTourPhoto,
    remarkableAIPhoto,
  ];

  return (
    <div className={styles.gallery}>
      <figure className={`${styles.galleryItem} ${styles.item1}`}>
        <img src={photos[0]} alt="" className={styles.galleryImg} />
      </figure>

      <figure className={`${styles.galleryItem} ${styles.item2}`}>
        <img src={photos[1]} alt="" className={styles.galleryImg} />
      </figure>

      <figure className={`${styles.galleryItem} ${styles.item3}`}>
        <img src={photos[2]} alt="" className={styles.galleryImg} />
      </figure>

      <figure className={`${styles.galleryItem} ${styles.item4}`}>
        <img src={photos[3]} alt="" className={styles.galleryImg} />
      </figure>

      <figure className={`${styles.galleryItem} ${styles.item5}`}>
        <img src={photos[4]} alt="" className={styles.galleryImg} />
      </figure>

      <figure className={`${styles.galleryItem} ${styles.item6}`}>
        <img src={photos[5]} alt="" className={styles.galleryImg} />
      </figure>
    </div>
  );
}
