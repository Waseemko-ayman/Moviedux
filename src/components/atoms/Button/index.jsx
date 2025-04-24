import { StyledButton } from './style';

const Button = ({ children, handleClick, typeOf }) => {
  return (
    <StyledButton typeof={typeOf} onClick={handleClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
