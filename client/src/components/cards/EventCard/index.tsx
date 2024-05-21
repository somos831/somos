import styles from './EventCard.module.css'

import useResponsive from '../../../hooks/useResponsive';

import { FaMapMarkerAlt } from "react-icons/fa";

const EventCard = ({event}) => {

    const { isDesktopOrLaptop, isTablet, isTabletOrMobile, isMobile } = useResponsive()

    const cardImgStyle = {
        ...(event.img && {
            backgroundImage: `url("${event.img}")`,
            ...(isTabletOrMobile && {
                gridColumn: isTablet? 'span 4' : 'span 12',
                backgroundSize: 'contain'
            }),
            ...(isMobile && {
                height: '300px'
            })
        }),
    }

    const cardContentStyle = {
        ...(event.img && {
            gridColumn: isDesktopOrLaptop? 'span 7' : 'span 8',
        }),
        ...(!event.img && isTablet && {
            gridColumn: 'span 12',
        }),
        ...(isMobile && {
            gridColumn: 'span 12',
            padding: '20px 0px 0px 0px',
        })
    }

    return (
        <article className={styles.eventContainerCard}>
            {event.img && isTabletOrMobile && (
                <section style={cardImgStyle} className={styles.eventImageCard}>
                </section>
            )}
            { isDesktopOrLaptop && (
                <section className={styles.eventDateCard}>
                    <div className={styles.eventNoImageCardContainer}>
                        <h6 className={styles.title}>{event.month} {event.day}</h6>
                        <p className={styles.subtitleDate}>{event.time}</p>
                        {event.categories && (
                            <div style={{ width: '100%' }}>
                                <hr className={styles.eventNoImageCardFirstHr}></hr>
                                <hr className={styles.eventNoImageCardLasttHr}></hr>
                                <p className={styles.eventNoImageCardEventCategoryTitle}>Event Categories:</p>
                                <p className={styles.eventNoImageCardEventCategoryBody}>{event.categories.map((category:string, index:number) => {
                                    return `${index>0? ', ':''}${category}`
                                })}</p>
                            </div>
                        )}
                    </div>
                </section>
            )}
            <section style={cardContentStyle} className={styles.eventContentCard}>
                {isTablet && (
                    <p className={styles.dateStr}>
                        <span>{event.month} {event.day}</span> || <span>{event.time}</span>
                    </p>
                )}
                {isMobile && (
                    <div>
                        <p style={{ fontWeight: 300 }}>{event.month}, {event.day} @ {event.time}</p>
                    </div>
                )}
                <div className={styles.header}>
                    <h6 className={styles.title}>{event.title}</h6>
                    <span style={{ fontWeight: 700 }} >||</span>
                    <p className={styles.providerStr}>{event.provider}</p>
                </div>
                {event.googleMap? (
                    <a className={styles.address} href={event.googleMap}>{!isMobile && (<span><FaMapMarkerAlt /></span>)}{event.address}</a>
                ):(
                    <p className={styles.address}>{!isMobile && (<span><FaMapMarkerAlt /></span>)}{event.address}</p>
                )}
                <p className={styles.description}>
                    {event.description}
                </p>
                {event.extraDetailsLink && (
                    <a className={styles.extraDetailsStr} href={event.extraDetailsLink}>{event.extraDetailsText? event.extraDetailsText : event.extraDetailsLink}</a>
                )}

                <div className={styles.linkContainer}>
                    {event.btnText && (<a className={styles.linkBtn} href={event.link}>{event.btnText}</a>)}
                    <span className={styles.costInfo}>{event.cost}</span>
                </div>
            </section>
            {event.img && isDesktopOrLaptop && (
                <section style={cardImgStyle} className={styles.eventImageCard}>
                </section>
            )}
        </article>
    )
}

export default EventCard