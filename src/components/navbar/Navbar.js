import React, { useState } from "react";
import "./Navbar.scss";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <div className="nav-container">
        <h1 className="logo">DEUS</h1> 
      <div className="icon-menu" onClick={() => setClick(!click)}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
    </div>
  );
};

export default Navbar;
