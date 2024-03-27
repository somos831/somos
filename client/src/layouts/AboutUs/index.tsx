import React from "react";

import SomosTeamCard from "../../components/SomosTeamCard/SomosTeamCard";
import SomosMemberCard from "../../assets/images/placeHolderSomosMember.png";
import styles from "./AboutUs.module.css";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const SOMOS_MEMBERS_LENGTH = 6;

export default function AboutUs(): React.ReactElement {
  const somosCards: React.ReactElement[] = [];
  for (let i = 0; i < SOMOS_MEMBERS_LENGTH; i++) {
    somosCards.push(
      <SomosTeamCard
        key={i}
        firstName="John"
        lastName="Doe"
        imageUri={SomosMemberCard}
        title="Content Creator"
      />,
    );
  }
  return (
    <div className={styles.container}>
      <Breadcrumbs />

      <div className={styles.aboutUsHeader}>
        <div className={styles.bottomContainer}>
          <div className={styles.aboutUsTextComponent}>
            <h2 className={styles.headerText1}>About US</h2>
            <p>
              uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in
            </p>
          </div>
        </div>
      </div>

      <div className={styles.aboutValues}>
        <p className={styles.aboutValuesContent}>
          We are dedicated to empowering individuals by providing them with the
          tools, resources, and opportunities they need to excel in the tech
          industry.
        </p>
      </div>

      <div className={styles.content}>
        <h3 className={styles.headerText2}>Our Values</h3>
        <p className={styles.OurValuesContent}>
          We are dedicated to empowering individuals by providing them with the
          tools, resources, and opportunities they need to excel in the tech
          industry, Through mentorship, skill, development, and support, we
          enable each member to reach their potential.
        </p>
      </div>
      <div className={styles.content}>
        <h3 className={styles.headerText2}>Meet the Team Behind Somos</h3>
      </div>

      <div className={styles.team}>
        <div className={styles.teamGrid}>{somosCards}</div>
      </div>
    </div>
  );
}
