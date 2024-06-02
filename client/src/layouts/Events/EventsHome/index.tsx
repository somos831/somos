import React from 'react'

import Banner from "../../../components/Banner"

import UpcomingEvents from "./UpcomingEvents"
import PastEvents from "./PastEvents"

import useEvents from "../../../hooks/useEvents"

const EventsHome = () => {

  const { loadEvents, upcomingevents, pastevents } = useEvents()

  React.useEffect(() => {
    loadEvents()
  }, [])

  return (
    <div>
      <Banner 
        background="/images/banners/somos_about_page.jpg"  
        title={"Our Events"} 
        body="Join us in our next exciting event!" 
        height={480}
        tabletHeight={400}
        mobileHeight={300}
        justifyContent="flex-end"
        alignItems="flex-start"
        py={3}
        variation="header1"
        decoration
      />

      <UpcomingEvents events={upcomingevents} />
      <PastEvents events={pastevents} />
    </div>
  )
}

export default EventsHome
