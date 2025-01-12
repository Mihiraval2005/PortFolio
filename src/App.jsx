// import {Suspense,lazy} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/NavBar/Nav"; // Adjust the path to Nav.jsx
import Home from "./Pages/Home"; // Adjust the path to Home/index.jsx
import About from "./Pages/About"; // Adjust the path to About/index.jsx
import Contact from "./Pages/Contact"; // Adjust the path to Contact/index.jsx
import Work from "./Pages/Work"; // Adjust the path to Work/index.jsx
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return (
    <div className="containers">
      <AnimatedCursor
        innerSize={9}
        outerSize={25}
        color="255, 255, 255" // RGB for the cursor color
        outerAlpha={0} // Transparency for the outer ring
        innerScale={0} // Scale of the inner dot
        outerScale={5} // Scale of the outer ring
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
        outerStyle={{
          border: "2px solid rgba(255, 255, 255, 0.8)", // White border with some transparency
          borderRadius: "50%", // Ensure the border is circular
          boxSizing: "border-box", // Includes the border in the outer size
        }}
      />
      <h1 className="wlc-text  text-center fw-light welcome-txt px-5">
        Hello Viewers, Mihir Welcomes You
      </h1>
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
          <div className="redirect-btn">
            <button className="footer-btn">Prev</button>
            <button className="footer-btn">Next</button>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
