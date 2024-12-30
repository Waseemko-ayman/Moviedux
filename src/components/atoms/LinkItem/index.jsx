import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const LinkItem = ({ children, linkPath, margin }) => {
  return (
    <Link to={linkPath} className={margin ? "margin" : ""}>
      {children}
    </Link>
  );
};

export default LinkItem;
