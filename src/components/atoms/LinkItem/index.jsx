import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const LinkItem = ({ linkText, linkPath, margin }) => {
  return (
    <Link to={linkPath} className={margin ? "margin": ""}>
      {linkText}
    </Link>
  );
};

export default LinkItem;
