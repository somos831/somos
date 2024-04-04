import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./SlideShow.module.css";

import aiSanFranPhoto from "../../assets/slideshowImages/somos_ai_sanfrancisco.jpeg";
import reunionPresentationPhoto from "../../assets/slideshowImages/somos_reunion_presentation.jpeg";
import boardMeeting from "../../assets/slideshowImages/somos_board_meeting.jpg";
import hartnellGroupPhoto from "../../assets/slideshowImages/somos_hartnell_group.png";
import julioTourPhoto from "../../assets/slideshowImages/somos_julio_tour.jpeg";
import remarkableAIPhoto from "../../assets/slideshowImages/somos_remarkable_ai.png";

const SlideShow: React.FC = () => {
  return (
    <section className={styles.slideShowContainer}>
      <Fade>
        {photos.map((image, indx) => {
          return (
            <div className={styles.slide} key={indx}>
              <div className={styles.photoContainer}>
                <img src={image.src} alt={image.alt} className={styles.photo} />
              </div>
            </div>
          );
        })}
      </Fade>
    </section>
  );
};
const photos = [
  {
    src: boardMeeting,
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

export default SlideShow;
