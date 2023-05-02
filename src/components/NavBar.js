import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
    <div className="navbar">
        <NavLink exact to="/songs">songs</NavLink>
        <NavLink exact to="/">Home</NavLink>
    </div>
    )
  }
  
  export default NavBar;