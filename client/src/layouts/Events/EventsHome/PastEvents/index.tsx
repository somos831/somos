import React from 'react'

import styles from './PastEvents.module.css'

import EventCard from '../../../../components/cards/EventCard'

import ResponsivePagination from 'react-responsive-pagination';

import useResponsive from '../../../../hooks/useResponsive';

const ITEM_PER_PAGE = 4

const PastEvents = ({ events }) => {

    const { isMobile } = useResponsive()

    const totalPages = React.useMemo<number>(() => (events)? Math.ceil(events.length / ITEM_PER_PAGE) : 0, [events]);
    const [currentPage, setCurrentPage] = React.useState<number>(1);

    const pageEvents = React.useMemo(() => {

        if (!events) return []

        const from = (currentPage - 1) * ITEM_PER_PAGE;
        const end = currentPage * ITEM_PER_PAGE;

        return  events.slice(from, end)

    }, [currentPage, events])

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
