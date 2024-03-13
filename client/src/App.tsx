import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import AboutUs from './layouts/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/about' Component={AboutUs} />
      </Routes>
    </Router>
  );
}

export default App;
