import React from "react";
import "./style.css";

const Button = ({ textBtn, handleClick, typeOf }) => {
  return (
    <>
      <button typeof={typeOf} className="button" onClick={handleClick}>
        {textBtn}
      </button>
    </>
  );
};

export default Button;
