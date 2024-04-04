import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import AboutUs from "./layouts/AboutUs";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./layouts/HomePage/HomePage.tsx";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/about" Component={AboutUs} />
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
