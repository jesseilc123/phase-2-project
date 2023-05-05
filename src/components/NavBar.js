import React from "react";
import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    padding: "0.25rem",
    margin: "1rem",
    background: "firebrick",
    textDecoration: "none",
    color: "white",
    hover: {
        color: "blue"
    }
};

function NavBar () {
    return (
    <div className="navbar">
        <NavLink exact to="/" style={linkStyles}>Home</NavLink>
        <NavLink exact to="/songslist" style={linkStyles}>Songs</NavLink>
        <NavLink exact to="/newsong" style={linkStyles}>New Song</NavLink>

    </div>
    );
  };
  
  export default NavBar;