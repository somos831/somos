import React from 'react'

import styles from './EventFormTitle.module.css'

interface EventFormTitleProps {
    title: string;
    mt?: number
}

const EventFormTitle:React.FC<EventFormTitleProps> = ({ title, mt=0 }) => {
  return (
    <div style={{ width: '100%' }}>
        <h4 style={{ marginTop: `${mt}px` }} className={styles.divisionTitle} >{title}</h4>
        <hr style={{ marginBottom: '30px' }} />
    </div>
  )
}

export default EventFormTitle
