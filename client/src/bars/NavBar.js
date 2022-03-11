import React from "react";
import {NavLink} from "react-router-dom";
import { Button } from "react-bootstrap";

function NavBar({user,handleLogoutClick,setUsersPlantsFunction}) {
  return (
    user?
    <div id="navLinkDiv">
       <a href="/" id="homepageLink">
          <h1 >Plant Nursery</h1>
          </a>
      <NavLink className="navLinks"
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
      >
        Home
      </NavLink>
      <NavLink className="navLinks"
        to="/about"
        exact
        style={linkStyles}
      >
        About Us
      </NavLink>
      <NavLink className="navLinks"
        to="/nursery"
        exact
        style={linkStyles} onClick={()=>setUsersPlantsFunction(user)}
      >
        My Collection
      </NavLink>
      <NavLink className="navLinks"
        to="/all_Plants"
        exact
        style={linkStyles}
      >
        Explore other Plants
      </NavLink>
      <Button className="navLinks logoutButton" onClick={handleLogoutClick} style={linkStyles} >Log Out</Button >
    </div>: 
    <div>
    <a href="/" id="homepageLink">
          <h1 >Plant Nursery</h1>
          </a>
    <NavLink className="navLinks"
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
      >
        Home
      </NavLink>
      <NavLink className="navLinks"
        to="/about"
        exact
        style={linkStyles}
      >
        About Us
      </NavLink>
      <NavLink className="navLinks"
        to="/nursery"
        exact
        style={linkStyles}
      >
        My Collection
      </NavLink>
      <NavLink className="navLinks"
        to="/all_Plants"
        exact
        style={linkStyles}
      >
        Explore other Plants
      </NavLink>
      </div>
  );
}
  export default NavBar

  const linkStyles = {
      display: "inline-block",
      width: "160px",
      padding: "12px",
      margin: "-10px 6px 12px",
      textDecoration:"none",
      color: "black"
    };