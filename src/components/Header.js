import "./Header.css";
import React from "react";
import { NavLink } from "react-router-dom";
import HomeButton from "./HomeButton";
function Header() {
  const buttonStyle = {
    backgroundColor: "green",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
  };
  return (
    <div>
      <div>
        <HomeButton />
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/"
        >
          {" "}
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/about"
        >
          {" "}
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "link-active" : "link-inactive"
          }
          to="/contact"
        >
          {" "}
          Contact
        </NavLink>

        <NavLink to="/">
          <button style={buttonStyle}>
            {" "}
            <p>Home</p>
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
