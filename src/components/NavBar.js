import React from "react";
import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
};

function NavBar() {
    return (
    <div className="navbar">
        <NavLink exact to="/songs" style={linkStyles}>songs</NavLink>
        <NavLink exact to="/" style={linkStyles}>Home</NavLink>
    </div>
    )
  }
  
  export default NavBar;