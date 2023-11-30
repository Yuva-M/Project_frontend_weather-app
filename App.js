import React from "react";
import "./styles.css";
import About from "./About";
import Nav from "./Nav";
import LoginSignup from "./LoginSignup";
import WeatherApp from "./WeatherApp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WeatherApp" element={<WeatherApp />} />
          <Route path="LoginSignup" element={<LoginSignup />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}
