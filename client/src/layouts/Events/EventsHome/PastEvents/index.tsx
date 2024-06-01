import React from 'react'

import styles from './PastEvents.module.css'

import EventCard from '../../../../components/cards/EventCard'

import ResponsivePagination from 'react-responsive-pagination';

import useResponsive from '../../../../hooks/useResponsive';

const event1 = {
    "title": "Hike at Toro Park",
    "description": "Join us at Toro Park! Whether you're an experienced hiker or just looking for a relaxed walk, this easy hike promises fresh air, scenic views, and great company.",
    "extraDetailsText": "Click here for Toro Park map",
    "extraDetailsLink": "https://www.countyofmonterey.gov/home/showpublisheddocument/113909/637947046684170000",
    "img": "./images/toroPark.png",
    "imgAlt": "Flyer for Hiking event with somos",
    "month": "May",
    "day": 4,
    "year": 2024,
    "dayOfWeek": "Sat",
    "date": "2024-05-04",
    "time": "9AM",
    "address": "501 Monterey-Salinas Highway 68, Overflow Parking Lot #9",
    "googleMap": "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x808df9c8ea6c3373:0x9b69e5aef7200292?entry=s&sa=X&ved=1t:8290&hl=en-us&ictx=111",
    "cost": "Free",
    "link": "https://docs.google.com/forms/d/e/1FAIpQLSfsns2BvWMsCc9pAnzD7AHVZCOb6SApj9w5eJh3bom3H0s4JQ/viewform",
    "btnText": "RSVP Here",
    "provider": "Somos",
    "categories": ["Networking", "Tech", "STEAM"]
  }
  
  const event2 = {
    "title": "Youth Job Fair",
    "description": "Looking for job opportunites this summer? Check out Youth Job Fair coming up this May! There will be retailers and employers from all over Monterey County! For more info, click the link below.",
    "img": "./images/youthJobFair.png",
    "imgAlt": "",
    "month": "May",
    "day": 8,
    "year": 2024,
    "dayOfWeek": "Wed",
    "date": "2024-05-08",
    "time": "11:00AM - 2:30PM, 4:00PM - 6:00PM",
    "address": "796 Northridge Mall, Salinas, CA 93906",
    "googleMap": "https://maps.google.com/maps/place/796+Northridge+mall,+Salinas,+CA+93906/data=!4m2!3m1!1s0x808dff114364f8f7:0x107b24142518c60d?entry=s&sa=X&ved=1t:78214&hl=en-us&ictx=111",
    "cost": "Free",
    "link": "https://app.premiervirtual.com/events/98e550bc-01d3-4afc-995f-b8751467632b/youth-job-fair/attendee",
    "btnText": "More Info",
    "provider": "Premier Virtual",
  }
  
  const events = [
    event1,
    event2,
  ]

const ITEM_PER_PAGE = 4

const PastEvents = () => {

    const { isMobile } = useResponsive()

    const totalPages = React.useMemo<number>(() => Math.ceil(events.length / ITEM_PER_PAGE), [events, events.length]);
    const [currentPage, setCurrentPage] = React.useState<number>(1);

    const pageEvents = React.useMemo(() => {

        const from = (currentPage - 1) * ITEM_PER_PAGE;
        const end = currentPage * ITEM_PER_PAGE;

        return events.slice(from, end)

    }, [currentPage])

    function handlePageChange(page:number) { setCurrentPage(page); }
    
    const hrStyleBottom = {
        ...(isMobile && {
          marginBottom: '20px'
        })
    }

    return (
        <div className={styles.section}>
            <h2 className={styles.eventHeading}>Past Events</h2>
            <hr style={hrStyleBottom} className={styles.hrLine} />

            <div className={styles.whiteCardContainer}>
                {pageEvents.map((event, index) => (<EventCard key={`${index}_ue`} event={event} hidebtnreadmore />))}

                <ResponsivePagination
                    total={totalPages}
                    current={currentPage}
                    onPageChange={page => handlePageChange(page)}
                />
            </div>
        </div>
    )
}

export default PastEvents
