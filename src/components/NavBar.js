import React from "react";
import { NavLink } from "react-router-dom"

// const linkStyles = {
//     display: "inline-block",
//     padding: "0.25rem",
//     margin: "1rem",
//     background: "pink",
//     textDecoration: "none",
//     color: "Black",
//     hover: {
//         color: "blue"
//     }
// };

function NavBar () {
    return (
    <div className="navbar">
        <NavLink exact to="/" >Home</NavLink>
        <NavLink exact to="/songslist">Songs</NavLink>
        <NavLink exact to="/newsong">New Song</NavLink>

    </div>
    );
  };
  
  export default NavBar;