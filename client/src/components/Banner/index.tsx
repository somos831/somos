import React from 'react'

import styles from './Banner.module.css'

interface BannerProps {
    title: string,
    background: string,
}

const Banner:React.FC<BannerProps> = ({ title, background }) => {
  
  const containerStyle = {
    backgroundImage: `url(${background})`,
  }
  
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.headerText1}>{ title }</h2>
      </div>
      <div style={containerStyle} className={styles.backgroundContainer}></div>
    </div>
  )
}

export default Banner