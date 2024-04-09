import styles from "./EventSection.module.css";

import { FaGlobe, FaUser } from "react-icons/fa";
import eventData from "../../../data/eventData.json";

export default function EventSection() {
  return (
    <section className={styles.eventSectionContainer}>
      <div className={styles.headingContainer}>
        <h2 className={styles.missionHeading}>Mission Statement</h2>
        <p className={styles.missionSubheading}>
          We are dedicated to empowering individuals by providing them with the
          tools, resources, and opportunities they need to excel in the tech
          industry.
        </p>
      </div>

      <h2 className={styles.eventHeading}>Upcoming Events</h2>

      <div className={styles.eventListContainer}>
        <h2 className={styles.monthHeader}>
          <time dateTime="2024" className={styles.month}>
            2024
          </time>
        </h2>
        {eventData?.event?.map((event, indx) => {
          return (
            <div className={styles.eventListCard} key={indx}>
              <div className={styles.dateColumn}>
                <time
                  dateTime={`${event.date}`}
                  aria-hidden="true"
                  className={styles.date}
                >
                  <span className={styles.dateDay}>{event.dayOfWeek}</span>
                  <span className={styles.dateNumber}>{event.day}</span>
                </time>
              </div>

              <article className={styles.eventCardContentContainer}>
                <div className={styles.eventCardDetails}>
                  <p className={styles.eventDate}>
                    {`${event.month} ${event.day} @ ${event.time}`}
                  </p>

                  <h3>{event.title}</h3>

                  <h4>
                    {`${event.type}` === "In-Person" ? (
                      <FaUser />
                    ) : `${event.type}` === "Virtual" ? (
                      <FaGlobe />
                    ) : (
                      ""
                    )}
                    {`${event.type} Event`}
                  </h4>

                  <p>{`${event.description}`}</p>

                  <div className={styles.eventRSVPContainer}>
                    <a
                      href={`${event.link}`}
                      target="_blank"
                      rel="noopener"
                      className={styles.eventRSVPLink}
                    >
                      RSVP Now
                    </a>
                    <p>{`${event.cost}`}</p>
                  </div>
                </div>

                <div className={styles.eventImageContainer}>
                  <img
                    src={event.img}
                    alt={event.imgAlt}
                    className={styles.image}
                  />
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
