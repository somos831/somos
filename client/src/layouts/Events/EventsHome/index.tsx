import React from "react";

import Banner from "../../../components/Banner";

import UpcomingEvents from "./UpcomingEvents";
import PastEvents from "./PastEvents";

import useEvents from "../../../hooks/useEvents";
import eventData from "../../../data/eventData.json";
import somosEvent from "../../../assets/images/somosEvent1.jpg";

const EventsHome = () => {
  const { loadEvents } = useEvents();

  React.useEffect(() => {
    loadEvents();
  }, []);

  return (
    <div>
      <Banner
        background={somosEvent}
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

      <UpcomingEvents events={eventData.upcomingEvent} />
      <PastEvents events={eventData.pastEvents} />
    </div>
  );
};

export default EventsHome;
