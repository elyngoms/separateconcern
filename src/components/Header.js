import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "./HomeButton";

function Header() {
  return (
    <div>
      <div>
        <HomeButton />
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Header;
