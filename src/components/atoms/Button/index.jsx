import React from "react";
import "./style.css";

const Button = ({ children, handleClick, typeOf }) => {
  return (
    <>
      <button typeof={typeOf} className="button" onClick={handleClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
