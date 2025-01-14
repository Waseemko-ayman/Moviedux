import { Link } from "react-router-dom";
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
  showImage,
  register = () => {},
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
      ) : inputType === "checkbox" ? (
        <div className="checkbox">
          <label className="custom__checkbox">
            <input
              type={inputType}
              id={inputId}
              name={inputName}
              value={inputValue}
              placeholder={placeholder}
              onChange={handleChange}
              {...register(inputName)}
            />
            <span></span>
          </label>
          <p>
            I agree with <Link href="#">Terms and Conditions</Link>
          </p>
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
            {...register(inputName)}
          />
          {showImage && (
            <img src={eyeImgSrc} alt="icon" onClick={onClick} />
          )}
        </div>
      )}
    </>
  );
};

export default Input;
