import React from "react"

import styles from "./Events.module.css";

import Banner from '../../../components/Banner'

import RegisterEventForm from "./RegisterEventForm";

export default function Events(): React.ReactElement {


    return (
        <section>
            <Banner title="Events" background='/images/banners/somos_about_page.jpg' />

            <article className={styles.articleContainer}>
                <section className={styles.header}>
                    <h2 className={styles.headerPage} >Make Yourself Heard!</h2>
                    <p className={styles.subHeaderPage}>Publish Your Events and Attract Audiences!</p>
                </section>

                <RegisterEventForm />
            </article>
        </section>
    )
}