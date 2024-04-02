import React from "react";
import styles from "./Carouse.module.css";

import aiSanFranPhoto from "../../assets/slideshowImages/somos_ai_sanfrancisco.jpeg";
import reunionPresentationPhoto from "../../assets/slideshowImages/somos_reunion_presentation.jpeg";
import somosBoardMeeting from "../../assets/slideshowImages/somos_board_meeting.jpg";
import hartnellGroupPhoto from "../../assets/slideshowImages/somos_hartnell_group.png";
import julioTourPhoto from "../../assets/slideshowImages/somos_julio_tour.jpeg";
import remarkableAIPhoto from "../../assets/slideshowImages/somos_remarkable_ai.png";

interface CarouselProps {
  duration: number;
}

const Carousel: React.FC<CarouselProps> = ({ duration }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === photos.length - 1 ? 0 : currentSlide + 1);
  };

  React.useEffect(() => {
    // Automatically switch to the next slide every 5 seconds (adjust as needed)
    const interval = setInterval(() => {
      nextSlide();
    }, duration);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  });

  return (
    <section className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {photos.map((image, idx) => {
          return (
            <img
              src={image.src}
              alt={image.alt}
              key={idx}
              className={
                currentSlide === idx
                  ? `${styles.slide} ${styles.fadeIn}`
                  : `${styles.slide} ${styles.slideHidden}`
              }
            />
          );
        })}
      </div>
    </section>
  );
};

const photos = [
  {
    src: somosBoardMeeting,
    alt: "",
  },
  {
    src: aiSanFranPhoto,
    alt: "",
  },
  {
    src: reunionPresentationPhoto,
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

export default Carousel;
