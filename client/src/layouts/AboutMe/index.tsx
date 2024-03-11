import React from 'react';
import SomosTeamCard from '../../components/SomosTeamCard/SomosTeamCard';
import SomosMemberCard from '../../assets/images/placeHolderSomosMember.png';

const SOMOS_MEMBERS_LENGTH = 6;

export default function AboutMe(): React.ReactElement {
  const somosCards: React.ReactElement[] = [];
  for (let i = 0; i < SOMOS_MEMBERS_LENGTH; i++) {
    somosCards.push(
      <SomosTeamCard
        key={i}
        firstName='John'
        lastName='Doe'
        imageUri={SomosMemberCard}
        title='Content Creator'
      />,
    );
  }
  return (
    <div>
      <div>
        <div>
          <h2>About US</h2>
          <p>
            uis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in
          </p>
        </div>
      </div>
      <div>
        <p>
          We are dedicated to empowering individuals by providing them with the
          tools, resources, and opportunities they need to excel in the tech
          industry.
        </p>
      </div>
      <div>
        <h3>Our Values</h3>
        <p>
          We are dedicated to empowering individuals by providing them with the
          tools, resources, and opportunities they need to excel in the tech
          industry, Through mentorship, skill, development, and support, we
          enable each member to reach their potential.
        </p>
      </div>
      <div>
        <h3>Meet the Team Behind Somos</h3>
        {somosCards}
      </div>
    </div>
  );
}
