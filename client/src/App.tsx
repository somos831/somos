import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import AboutUs from "./layouts/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./layouts/HomePage/HeroSection/HeroSection.tsx";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/about" Component={AboutUs} />
          <Route path="/" Component={HeroSection} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
