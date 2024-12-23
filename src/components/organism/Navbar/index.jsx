import React from "react";
import "./style.css";
import LinkItem from "../../atoms/LinkItem";
import { PATHS } from "../../../router/paths";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <LinkItem linkPath={PATHS.MOVIES.ROOT} linkText="Home" />
        </li>
        <li>
          <LinkItem linkPath={PATHS.WATCHLIST} linkText="Watchlist" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
