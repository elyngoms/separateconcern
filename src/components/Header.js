import React from "react";
import { Link, NavLink } from "react-router-dom";
import HomeButton from "./HomeButton";
function Header() {
  return (
    <div>
      <div>
        <HomeButton />
      </div>
      <div>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "green" } : { color: "blue" }
          }
          to="/"
        >
          {" "}
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "green" } : { color: "blue" }
          }
          to="/about"
        >
          {" "}
          About
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "green" } : { color: "blue" }
          }
          to="/contact"
        >
          {" "}
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
