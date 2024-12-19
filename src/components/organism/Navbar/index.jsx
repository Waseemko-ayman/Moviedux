import React from "react";
import "./style.css";
import LinkItem from "../../atoms/LinkItem";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <LinkItem linkPath="/" linkText="Home" />
        </li>
        <li>
          <LinkItem linkPath="/watchlist" linkText="Watchlist" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
