import React from "react";

import styles from "./AboutUs.module.css";

import collabIcon from "../../assets/icons/Collaboration.svg";
import empowerIcon from "../../assets/icons/Empowerment.svg";
import growthIcon from "../../assets/icons/Growth.svg";
import somosStaff from "../../assets/images/somosStaff.png";

export default function AboutUs(): React.ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.aboutUsHeader}>
        <div className={styles.bottomContainer}>
          <div className={styles.aboutUsTextComponent}>
            <h2 className={styles.headerText1}>About Us</h2>
            <p>
              Our mission is to create a collaborative network of tech
              professionals committed to empowering aspiring individuals and
              fostering community.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.quoteContainer}>
        <p className={styles.quote}>
          "Do what you can, with what you have, where you are."
        </p>

        <div className={styles.quoteAuthorContainer}>
          <p className={styles.quoteAuthor}>Theodore Roosevelt</p>
        </div>
      </div>

      <div className={styles.content}>
        <p>
          <em className={styles.lastUpdatedText}>Last Updated April 2024</em>
        </p>

        <article className={styles.articleSection}>
          <h3 className={styles.headerText2}>Description</h3>

          <p>
            Tech. Network. <span>Community.</span>
          </p>
          <p>
            Just a few hours north of us lies the nation's largest technology
            hub. What many aren't aware of is that right here in the Central
            Coast, we have our own pool of tech talent, albeit without the
            advantages of being part of the innovation capital.
          </p>
          <p>
            The lack of a strong tech community in Santa Cruz and Monterey
            County was greatly felt by Saul Reyes, a computer science graduate
            working as a software engineer. From the very small community of Las
            Lomas, Saul searched for connections with other Latino tech
            professionals who could relate to his journey and share similar
            aspirations, but found it to be a challenging endeavor. Saul would
            sometimes drive up to 2-3 hours to the Bay Area in order to attend
            networking events and make those meaningful connections in his
            field. But after creating a few industry allies in Watsonville and
            Salinas, Saul realized there was a greater web of tech talent here
            at home, the only problem was the lack of a network to bring them
            all together.
          </p>
        </article>

        <article className={styles.articleSection}>
          <h3 className={styles.headerText2}>Why SOMOS?</h3>

          <p>
            Somos translates to “We are.” Meaning that we can become anything
            together. Latinos are seldom represented in the technology industry,
            despite their growing numbers and influence, but Somos is looking to
            change that.
          </p>
          <p>
            Our mission is to create a collaborative network of tech
            professionals committed to empowering aspiring tech individuals,
            fostering community growth, through mentorship, community-driven
            projects, and professional development.
          </p>
        </article>

        <article className={styles.articleSection}>
          <h3 className={styles.headerText2}>Our Values</h3>

          <div className={styles.coreValuesContainer}>
            <div className={styles.coreValuesSection}>
              <img src={collabIcon} alt="" className={styles.coreValuesIcon} />
              <h4>Collaboration</h4>
              <p>
                We foster an environment where tech professionals and aspiring
                individuals work together, sharing knowledge and resources to
                achieve common goals
              </p>
            </div>

            <div className={styles.coreValuesSection}>
              <img src={empowerIcon} alt="" className={styles.coreValuesIcon} />
              <h4>Empowerment</h4>
              <p>
                Through mentorship, skill development, and support, we enable
                each member to reach their full potential
              </p>
            </div>

            <div className={styles.coreValuesSection}>
              <img src={growthIcon} alt="" className={styles.coreValuesIcon} />
              <h4>Community Growth</h4>
              <p>
                We actively contribute to the growth of our local and global
                communities by engaging in initiatives that create positive
                change
              </p>
            </div>
          </div>

          <article className={styles.articleSection}>
            <h3 className={styles.headerText2}>Meet the Team Behind SOMOS</h3>

            <div className={styles.somosGroupPhotoContainer}>
              <img
                src={somosStaff}
                alt="group photo of somos staff"
                className={styles.somosGroupPhoto}
              />
            </div>

            <div className={styles.captionContainer}>
              <p>
                Top (Left to Right): Mytzy Escalante Godinez, Mayra Ochoa,
                Estefania Escalante, Madahy Villareal, Angela Hernandez,
                Jennifer Lopez
              </p>
              <p>
                Bottom (Left to Right): Saul Reyes-Morales, Jonathan Odriano,
                Armando Banuelos, Ronaldo Mendoza
              </p>
            </div>
          </article>
        </article>
      </div>
    </div>
  );
}
