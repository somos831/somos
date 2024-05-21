import Banner from "../../../components/Banner"

import UpcomingEvents from "./UpcomingEvents"
import PastEvents from "./PastEvents"

const index = () => {
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

      <UpcomingEvents />
      <PastEvents />
    </div>
  )
}

export default index
