import React from "react";
import * as T from "../../organism/Typography";
import "./style.css";

const PagesLoading = ({ showTitle }) => {
  return (
    <div className="pages__loading">
      <img src="/fav.png" alt="moviedux" title="moviedux" />
      {showTitle && <T.H1>Moviedux</T.H1>}
    </div>
  );
};

export default PagesLoading;
