import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import AboutUs from './layouts/AboutUs';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/about' Component={AboutUs} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
