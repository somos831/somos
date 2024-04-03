import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
    return (<footer className={styles.footer}> 
        <section className={styles.overallSect}>
            <section className={styles.topSection}>
                <section className={styles.topLeft}>
                    <ul className={styles.footerNavList}>
                        <li><h3>Menu</h3></li>
                        <li><h4>Home</h4></li>
                        <li><h4>Events</h4></li>
                        <li><h4>About</h4></li>
                        <li><h4>Contact</h4></li>
                    </ul>
                </section>
                <section className={styles.topRight}>
                    <section className={styles.text}>
                        
                        <h2>Lorem ipsum dolor</h2>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                        <p>Lorem ipsum dolor sit amet consectetur</p>
                        <p>Lorem ipsum</p>
                        
                    </section>
                    <section className={styles.socialMedia}>
                        <FaLinkedin size={40}/>
                        <FaInstagram size={40}/>
                        <FaTiktok size={40}/>
                    </section>
                </section>
                
            </section>
            <section className={styles.bottomSection}>
                <p>&copy; 2024 SOMOS | Terms of Use | Privacy Policy</p>
            </section>
        </section>
        
    </footer>);
}