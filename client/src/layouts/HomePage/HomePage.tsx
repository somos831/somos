import React from "react";
import styles from "./HomePage.module.css";
import HeroSection from "./HeroSection/HeroSection";
import PhotoSection from "./PhotoSection/PhotoSection";
import PhotoGrid from "../../components/PhotoGrid/PhotoGrid";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <PhotoGrid />
    </main>
  );
}
