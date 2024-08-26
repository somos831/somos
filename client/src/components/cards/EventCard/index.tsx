//TODO: Lines below remove typescript error, remove once types are implemented
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import styles from "./EventCard.module.css";

import useResponsive from "../../../hooks/useResponsive";

import { FaMapMarkerAlt } from "react-icons/fa";

const EventCard = ({ event, hidebtnreadmore, btnColor = "501D86" }) => {
  const { isDesktopOrLaptop, isTablet, isTabletOrMobile, isMobile } =
    useResponsive();

  const cardImgStyle = {
    ...(event.img && {
      backgroundImage: `url("${event.img}")`,
      ...(isTabletOrMobile && {
        gridColumn: isTablet ? "span 4" : "span 12",
        backgroundSize: "contain",
        ...(isTablet && {
          backgroundPositionY: "calc(50% - 60px)",
        }),
      }),
      ...(isMobile && {
        height: "200px",
      }),
    }),
  };

  const cardContentStyle = {
    ...(event.img && {
      gridColumn: isDesktopOrLaptop ? "span 9" : "span 8",
    }),
    ...(!event.img &&
      isTablet && {
        gridColumn: "span 12",
      }),
    ...(isMobile && {
      gridColumn: "span 12",
      padding: "20px 0px 20px 0px",
    }),
  };

  const dateStringP = {
    ...(isMobile && {
      display: "inline",
    }),
  };

  return (
    <article className={styles.eventContainerCard}>
      {event.img && (
        <section
          style={cardImgStyle}
          className={styles.eventImageCard}
        ></section>
      )}
      {isDesktopOrLaptop && !event.img && (
        <section className={styles.eventDateCard}>
          <div className={styles.eventNoImageCardContainer}>
            <h6 className={styles.title}>
              {event.month} {event.day}
            </h6>
            <p className={styles.subtitleDate}>{event.time}</p>
            {event.categories && (
              <div style={{ width: "100%" }}>
                <hr className={styles.eventNoImageCardFirstHr}></hr>
                <hr className={styles.eventNoImageCardLasttHr}></hr>
                <p className={styles.eventNoImageCardEventCategoryTitle}>
                  Event Categories:
                </p>
                <p className={styles.eventNoImageCardEventCategoryBody}>
                  {event.categories.map((category: string, index: number) => {
                    return `${index > 0 ? ", " : ""}${category}`;
                  })}
                </p>
              </div>
            )}
          </div>
        </section>
      )}
      <section style={cardContentStyle} className={styles.eventContentCard}>
        <p style={dateStringP} className={styles.dateStr}>
          <span className={styles.dateInfo}>
            {event.month} {event.day}
          </span>{" "}
          <span>@ {event.time}</span>
        </p>
        <div className={styles.header}>
          <h6 className={styles.title}>{event.title}</h6>
          <span style={{ fontWeight: 700 }}>||</span>
          <p className={styles.providerStr}>{event.provider}</p>
        </div>
        {event.googleMap ? (
          <a className={styles.address} href={event.googleMap}>
            {!isMobile && (
              <span>
                <FaMapMarkerAlt />
              </span>
            )}
            {event.address}
          </a>
        ) : (
          <p className={styles.address}>
            {!isMobile && (
              <span>
                <FaMapMarkerAlt />
              </span>
            )}
            {event.address}
          </p>
        )}
        {event.categories && (
          <p className={styles.eventCategoryContainer}>
            <span className={styles.eventCategoryTitle}>Event Categories:</span>
            <span className={styles.eventCategoryTag}>
              {event.categories.map((category: string, index: number) => {
                return `${index > 0 ? ", " : ""}${category}`;
              })}
            </span>
          </p>
        )}
        <p className={styles.description}>{event.description}</p>
        {event.extraDetailsLink && (
          <a
            className={styles.extraDetailsStr}
            href={event.extraDetailsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {event.extraDetailsText
              ? event.extraDetailsText
              : event.extraDetailsLink}
          </a>
        )}
        {!hidebtnreadmore && (
          <div className={styles.linkContainer}>
            {event.btnText && (
              <a
                style={{ background: `#${btnColor}` }}
                className={styles.linkBtn}
                href={event.link}
              >
                {event.btnText}
              </a>
            )}
            <span className={styles.costInfo}>{event.cost}</span>
          </div>
        )}
      </section>
    </article>
  );
};

export default EventCard;
