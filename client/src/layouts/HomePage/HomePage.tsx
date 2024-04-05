import HeroSection from "./HeroSection/HeroSection";
import EventSection from "./EventSection/EventSection.tsx";
import SlideShow from "../../components/SlideShow/SlideShow.tsx";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SlideShow />
      <EventSection />
    </main>
  );
}
