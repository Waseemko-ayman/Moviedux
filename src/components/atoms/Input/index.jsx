import { Link } from 'react-router-dom';
import { StyledInput, StyledInputWrapper } from './style';
import React from 'react';

// This function is used to convert a normal component to a ref-enabled component. You pass ref as the second parameter to the component.
const Input = React.forwardRef(
  (
    {
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
    },
    ref
  ) => {
    const isRegistered = typeof register === 'function';

    const commonProps = isRegistered
      ? register(inputName)
      : {
          name: inputName,
          value: inputValue,
          onChange: handleChange,
          ref,
        };

    return (
      <StyledInput>
        {inputType === 'textarea' ? (
          <StyledInputWrapper className="textarea">
            <textarea
              type={inputType}
              id={inputId}
              placeholder={placeholder}
              {...commonProps}
            />
          </StyledInputWrapper>
        ) : inputType === 'checkbox' ? (
          <div className="checkbox">
            <label className="custom__checkbox">
              <input
                type={inputType}
                id={inputId}
                placeholder={placeholder}
                {...commonProps}
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
              placeholder={placeholder}
              {...commonProps}
            />
            {showImage && <img src={eyeImgSrc} alt="icon" onClick={onClick} />}
          </StyledInputWrapper>
        )}
      </StyledInput>
    );
  }
);

export default Input;
