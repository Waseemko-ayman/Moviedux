import { StyledButtonLink } from '../../../styles/common';

const Button = ({ children, handleClick, typeOf }) => {
  return (
    <StyledButtonLink typeof={typeOf} onClick={handleClick}>
      {children}
    </StyledButtonLink>
  );
};

export default Button;
