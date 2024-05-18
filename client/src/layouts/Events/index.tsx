import React from "react"

import styles from "./Events.module.css";

import Banner from '../../components/Banner'

import RegisterEventForm from "./RegisterEventForm";

export default function Events(): React.ReactElement {


    return (
        <section>
            <Banner title="Events" />

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