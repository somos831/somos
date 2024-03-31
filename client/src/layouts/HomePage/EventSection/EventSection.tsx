import React from "react";
import styles from "./EventSection.module.css";

import aprilMixerPoster from "../../../assets/images/april_tech_mixer.png";
import { FaUser } from "react-icons/fa";

export default function EventSection() {
  return (
    <section className={styles.eventSectionContainer}>
      <div className={styles.headingContainer}>
        <h2 className={styles.missionHeading}>Our Mission Statement</h2>
        <p className={styles.missionSubheading}>
          We are dedicated to empowering individuals by providing them with the
          tools, resources, and opportunities they need to excel in the tech
          industry.
        </p>
      </div>

      <h2 className={styles.eventHeading}>Upcoming Events</h2>

      <div className={styles.eventListContainer}>
        <h2 className={styles.monthHeader}>
          <time dateTime="2024-04" className={styles.month}>
            April 2024
          </time>
        </h2>

        <div className={styles.eventListCard}>
          <div className={styles.dateColumn}>
            <time
              dateTime="2024-04-17"
              aria-hidden="true"
              className={styles.date}
            >
              <span className={styles.dateDay}>Wed</span>
              <span className={styles.dateNumber}>17</span>
            </time>
          </div>

          <article className={styles.eventCardContentContainer}>
            <p className={styles.eventDate}>April 17 @ 6:00pm - 9:00am</p>

            <h3>Breaking Into Tech</h3>

            <h4>
              <FaUser />
              In-Person Event
            </h4>

            <p>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>

            <div className={styles.eventRSVPContainer}>
              <a href="#" className={styles.eventRSVPLink}>
                RSVP Now
              </a>
              <p>Free</p>
            </div>
          </article>

          <div className={styles.eventImageContainer}>
            <img src={aprilMixerPoster} alt="" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
