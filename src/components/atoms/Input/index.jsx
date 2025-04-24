import { Link } from 'react-router-dom';
import { StyledInput, StyledInputWrapper } from './style';

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
    <StyledInput>
      {inputType === 'textarea' ? (
        <StyledInputWrapper className="textarea">
          <textarea
            type={inputType}
            id={inputId}
            name={inputName}
            value={inputValue}
            placeholder={placeholder}
            onChange={handleChange}
          />
        </StyledInputWrapper>
      ) : inputType === 'checkbox' ? (
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
        <StyledInputWrapper>
          <input
            type={inputType}
            id={inputId}
            name={inputName}
            value={inputValue}
            placeholder={placeholder}
            onChange={handleChange}
            {...register(inputName)}
          />
          {showImage && <img src={eyeImgSrc} alt="icon" onClick={onClick} />}
        </StyledInputWrapper>
      )}
    </StyledInput>
  );
};

export default Input;
