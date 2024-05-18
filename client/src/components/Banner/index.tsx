import React from 'react'

import styles from './Banner.module.css'

interface BannerProps {
    title: string,
}

const Banner:React.FC<BannerProps> = ({title}) => {
  return (
    <div className={styles.aboutUsHeader}>
        <div className={styles.bottomContainer}>
        <div className={styles.aboutUsTextComponent}>
            <h2 className={styles.headerText1}>{ title }</h2>
            <p>
            Our mission is to create a collaborative network of tech
            professionals committed to empowering aspiring individuals and
            fostering community.
            </p>
        </div>
        </div>
    </div>
  )
}

export default Banner