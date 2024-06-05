import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import { Provider } from 'react-redux'
import store from './store'

import { Outlet } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Navbar />

      <Outlet />

      <Footer />
    </Provider>
  );
}

export default App;
