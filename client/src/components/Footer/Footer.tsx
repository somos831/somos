import { FaInstagram, FaLinkedinIn, FaTiktok, FaDiscord} from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
    return (<footer className={styles.footer}> 
        <section className={styles.overallSect}>
            <section className={styles.topSection}>
                <section className={styles.topLeft}>
                    <ul className={styles.footerNavList}>
                        <li><h3>Menu</h3></li>
                        <li><h4>Home</h4></li>
                        <li><h4>About</h4></li>
                    </ul>
                </section>
                <section className={styles.topRight}>
                    <section className={styles.text}>
                        <h2>joinsomos@gmail.com</h2>
                    </section>
                    <section className={styles.socialMedia}>
                        <a className= {styles.noDecoration} href="https://www.linkedin.com/company/98805767/admin/feed/posts/" target="_blank"><FaLinkedinIn size={40}/></a>
                        <a className= {styles.noDecoration} href="https://www.instagram.com/somostechassociation/" target="_blank"><FaInstagram size={40}/></a>
                        <a className= {styles.noDecoration} href="https://www.tiktok.com/@join.somos?_t=8jXca38wEZf&_r=1" target="_blank"><FaTiktok size={40}/></a>
                        <a className= {styles.noDecoration} href="https://discord.com/invite/ZP8Jr6fJan" target="_blank"><FaDiscord size={40} /></a>
                    </section>
                </section>
                
            </section>
            <section className={styles.bottomSection}>
                <p>&copy; 2024 SOMOS | Terms of Use | Privacy Policy</p>
            </section>
        </section>
        
    </footer>);
}