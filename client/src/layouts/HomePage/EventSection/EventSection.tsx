import styles from "./EventSection.module.css";

import { FaMapMarkerAlt } from "react-icons/fa";
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
                    <FaMapMarkerAlt />
                    <a
                      href={event.googleMap}
                      className={styles.addressLink}
                      target="_blank"
                      rel="noopener"
                    >
                      {event.address}
                    </a>
                  </h4>

                  <p>{`${event.description}`}</p>

                  {event.extraDetailsLink ? (
                    <a
                      href={`${event.extraDetailsLink}`}
                      className={styles.extraDetailsLink}
                      target="_blank"
                      rel="noopener"
                    >
                      {event.extraDetailsText}
                    </a>
                  ) : (
                    ""
                  )}

                  <div className={styles.eventRSVPContainer}>
                    {event.link ? (
                      <>
                        <a
                          href={`${event.link}`}
                          target="_blank"
                          rel="noopener"
                          className={styles.eventRSVPLink}
                        >
                          {event.btnText}
                        </a>
                      </>
                    ) : (
                      ""
                    )}
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
