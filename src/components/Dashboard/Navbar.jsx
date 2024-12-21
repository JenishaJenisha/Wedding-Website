import { Link } from "react-router-dom";
import "./Navbar.css"; // Create a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Wedding of JS </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Our Story</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Conatact</Link></li>
        <li><Link to="/rsvp">RSVP</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
