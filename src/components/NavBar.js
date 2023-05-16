import React from "react";
import { NavLink } from "react-router-dom"

function NavBar () {
    return (
        <div className="navbar">
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/songslist">Songs</NavLink>
            <NavLink exact to="/newsong">New Song</NavLink>
        </div>
    );
};
  
export default NavBar;