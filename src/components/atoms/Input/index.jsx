import "./style.css";

const Input = ({
  inputType,
  inputId,
  inputName,
  inputValue,
  placeholder,
  handleChange,
  eyeImgSrc,
  onClick,
}) => {
  return (
    <>
      {inputType === "textarea" ? (
        <div className="input__wrapper textarea">
          <textarea
            type={inputType}
            id={inputId}
            name={inputName}
            value={inputValue}
            placeholder={placeholder}
            onChange={handleChange}
          />
        </div>
      ) : (
        <div className="input__wrapper">
          <input
            type={inputType}
            id={inputId}
            name={inputName}
            value={inputValue}
            placeholder={placeholder}
            onChange={handleChange}
          />
          {inputType === "password" && (
            <img src={eyeImgSrc} alt="icon" onClick={onClick} />
          )}
        </div>
      )}
    </>
  );
};

export default Input;
