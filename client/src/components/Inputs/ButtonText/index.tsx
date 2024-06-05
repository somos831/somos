import React from 'react'

import styles from './ButtonText.module.css'

type OnClickType = () => void

interface ButtonTextProps {
    text: string;
    onClick?: OnClickType
}

const ButtonText:React.FC<ButtonTextProps> = ({ text, onClick }) => {
  return (
    <button className={styles.btn} type='button' onClick={onClick}>
        {text}
    </button>
  )
}

export default ButtonText
