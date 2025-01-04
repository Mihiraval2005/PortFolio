// import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/NavBar/Nav"; // Adjust the path to Nav.jsx
import Home from "./Pages/Home"; // Adjust the path to Home/index.jsx
import About from "./Pages/About"; // Adjust the path to About/index.jsx
import Contact from "./Pages/Contact"; // Adjust the path to Contact/index.jsx
import Work from "./Pages/Work"; // Adjust the path to Work/index.jsx

const App = () => {
  return (
    <div className="containers">
    <h1 className="text-white text-center fw-light welcome-txt px-5">Hello Viewers, Mihir Welcomes You</h1>
      <Router>
        <Nav />
        <div className="page-center">
        <div className="container-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
