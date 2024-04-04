import React from "react";
import styles from "./MemberGrid.module.css";
import SomosTeamCard from "../../components/SomosTeamCard/SomosTeamCard";
import SomosMemberCard from "../../assets/images/placeHolderSomosMember.png";

const SOMOS_MEMBERS_LENGTH = 6;

const MemberGrid: React.FC = () => {
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
    <div className={styles.team}>
      <div className={styles.teamGrid}>{somosCards}</div>
    </div>
  );
};

export default MemberGrid;
