import styles from './UpcomingEvents.module.css'

import EventCard from '../../../../components/cards/EventCard'

import ResponsivePagination from 'react-responsive-pagination';

import useResponsive from '../../../../hooks/useResponsive';

import 'react-responsive-pagination/themes/classic.css';
import React from 'react';

const ITEM_PER_PAGE = 4

const UpcomingEvents = ({ events }) => {

  const { isMobile } = useResponsive()

  const totalPages = React.useMemo<number>(() => (events)? Math.ceil(events.length / ITEM_PER_PAGE) : 0, [events]);
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const pageEvents = React.useMemo(() => {

    if (!events) return []

    const from = (currentPage - 1) * ITEM_PER_PAGE;
    const end = currentPage * ITEM_PER_PAGE;

    return events.slice(from, end)

  }, [currentPage, events])


  function handlePageChange(page:number) {
    setCurrentPage(page);
    // ... do something with `page`
  }

  const hrStyleBottom = {
    ...(isMobile && {
      marginBottom: '20px'
    })
  }

  return (
    <div className={styles.section}>
        <h2 className={styles.eventHeading}>Upcoming Events</h2>
        <hr style={hrStyleBottom} className={styles.hrLine} />

        {events && events instanceof Array && events.length > 0 && (
            <div className={styles.whiteCardContainer}>
              {pageEvents.map((event, index) => (<EventCard hidebtnreadmore={false} key={`${index}_ue`} event={event} />))}

              <ResponsivePagination
                total={totalPages}
                current={currentPage}
                onPageChange={page => handlePageChange(page)}
              />
            </div>
        )}
    </div>
  )
}

export default UpcomingEvents
