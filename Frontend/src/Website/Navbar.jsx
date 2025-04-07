import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '/school logo.png';



function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={Logo} alt="Emca School" width={"50px"} />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Facility">Facility</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        {/* <Link to="/chat">Chat</Link> */}
        <Link to="/login">Login</Link>

      </div>
    </nav>
  );
}

export default Navbar;
