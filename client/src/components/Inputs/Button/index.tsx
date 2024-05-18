import React, { ReactNode } from 'react'

import styles from "./Button.module.css"

interface ButtonProps {
    type: 'submit' | 'reset' | 'button';
    children: ReactNode;
}

const Button:React.FC<ButtonProps> = ({ children, type  }) => {
  return (
    <button className={styles.btn} type={type}>
        {children}
    </button>
  )
}

export default Button
