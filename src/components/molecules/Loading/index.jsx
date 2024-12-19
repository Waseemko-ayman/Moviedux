import React from "react";
import "./style.css";
import * as T from "../Typography";

const Loading = () => {
  return (
    <div className="loading__container">
      <div className="spinner"></div>
      <T.Body1>Loading Movies...</T.Body1>
    </div>
  );
};

export default Loading;
