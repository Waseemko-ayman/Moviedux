import React from "react";
import "./style.css";

const Input = ({
  inputType,
  inputId,
  inputName,
  inputValue,
  placeholder,
  handleChange,
}) => {
  return (
    <>
      {inputType === "textarea" ? (
        <textarea
          type={inputType}
          id={inputId}
          name={inputName}
          value={inputValue}
          placeholder={placeholder}
          onChange={handleChange}
        />
      ) : (
        <input
          className="input"
          type={inputType}
          id={inputId}
          name={inputName}
          value={inputValue}
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default Input;
