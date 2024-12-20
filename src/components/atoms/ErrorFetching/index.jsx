import React from "react";
import "./style.css";
import * as T from "../../organism/Typography";

const ErrorFetching = ({ errorText }) => {
  return (
    <div className="error__fetching">
      <T.H1>{errorText}</T.H1>
    </div>
  );
};

export default ErrorFetching;
