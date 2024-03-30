import React from "react";
import styles from "./Carouse.module.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import aiSanFranPhoto from "../../assets/slideshowImages/somos_ai_sanfrancisco.jpeg";
import reunionPresentationPhoto from "../../assets/slideshowImages/somos_reunion_presentation.jpeg";
import carmelMarketPhoto from "../../assets/slideshowImages/somos_carmel_market.png";
import hartnellGroupPhoto from "../../assets/slideshowImages/somos_hartnell_group.png";
import julioTourPhoto from "../../assets/slideshowImages/somos_julio_tour.jpeg";
import remarkableAIPhoto from "../../assets/slideshowImages/somos_remarkable_ai.png";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const nextSlide = () => {
    setCurrentSlide(currentSlide === photos.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? photos.length - 1 : currentSlide + 1);
  };

  return (
    <div className={styles.carousel}>
      <BsArrowLeftCircleFill
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={prevSlide}
      />

      {photos.map((image, idx) => {
        return (
          <img
            src={image.src}
            alt={image.alt}
            key={idx}
            className={
              currentSlide === idx
                ? `${styles.slide}`
                : `${styles.slide} ${styles.slideHidden}`
            }
          />
        );
      })}

      <BsArrowRightCircleFill
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={nextSlide}
      />
      <span className={styles.indicators}>
        {photos.map((_, idx) => {
          return (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={
                currentSlide === idx
                  ? `${styles.indicator}`
                  : `${styles.indicator} ${styles.indicatorInactive}`
              }
            ></button>
          );
        })}
      </span>
    </div>
  );
}

const photos = [
  {
    src: aiSanFranPhoto,
    alt: "",
  },
  {
    src: reunionPresentationPhoto,
    alt: "",
  },
  {
    src: carmelMarketPhoto,
    alt: "",
  },
  {
    src: hartnellGroupPhoto,
    alt: "",
  },
  {
    src: julioTourPhoto,
    alt: "",
  },
  {
    src: remarkableAIPhoto,
    alt: "",
  },
];
