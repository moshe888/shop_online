import React, { useState } from "react";
import Logo from "../assets/shop_online.jpg";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(true);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
       
        <div className="hiddenLinks">
        <img src={Logo}  />
        </div>
      </div>
      <div className="rightSide">
      <Link to="/AddProduct"> AddProduct </Link>
        <Link to="/menu"> תפריט </Link>
        <Link to="/about"> אודות </Link>
        <Link to="/contact"> צור קשר </Link>
        <Link to="/"> ראשי </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
