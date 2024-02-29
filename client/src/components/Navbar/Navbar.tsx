import React from "react"
import styles from "./Navbar.module.css"
import SOMOSLogo from "../../../public/somosLogo.png"


export default function Navbar(){
    return (
        <nav className={styles.mainContainer}>
            <img className={styles.somosLogo} src={SOMOSLogo}/>

            <div className={styles.navMenu}>
                <a href="#" className={styles.navLinks}> Home </a>
                <a href="#" className={styles.navLinks}> About </a>
                <a href="#" className={styles.navLinks}> Contact </a>
            </div>
            
        </nav>
    )
}