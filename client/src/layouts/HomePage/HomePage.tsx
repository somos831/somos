import React from "react";
import styles from "./HomePage.module.css";
import HeroSection from "./HeroSection/HeroSection";
import PhotoSection from "./PhotoSection/PhotoSection.tsx";
import EventSection from "./EventSection/EventSection.tsx";
import SlideShow from "../../components/SlideShow/SlideShow.tsx";
import Carousel from "../../components/Carousel/Carousel.tsx";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Carousel duration={4000} />
      <EventSection />
    </main>
  );
}
