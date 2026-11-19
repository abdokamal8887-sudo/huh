import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span>TECH</span>ZONE
      </div>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <NavLink to="/contact" className="nav-btn">
        Get Started
      </NavLink>
    </nav>
  );
}

export default Navbar;