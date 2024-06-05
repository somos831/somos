import styles from "./EventSection.module.css";

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
    </section>
  );
}
