import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Nav.css";
import navLogo from "../../assets/nav-logo.png";
import navProfile from "../../assets/nav-profile.jpg";
import menu from "../../assets/menu.png";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  return (
    <div className="nav-center">
      <nav className="nav">
        <div className="logo">
          <img src={navLogo} alt="Logo" />
        </div>
        <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
          <li>
            <Link className="link-li" to="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link className="link-li" to="/about" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link className="link-li" to="/work" onClick={toggleMenu}>
              Work
            </Link>
          </li>
          <li>
            <Link className="link-li" to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="profile-img">
          <img src={navProfile} alt="Profile" />
        </div>
        <div className="name">Mihir Raval</div>
        <div className="menu" onClick={toggleMenu}>
          <img src={menu} alt="Menu" />
        </div>
      </nav>
    </div>
  );
};

export default Nav;
