import { StyledLink } from './style';

const LinkItem = ({ children, linkPath, margin }) => {
  return (
    <StyledLink to={linkPath} className={margin ? 'margin' : ''}>
      {children}
    </StyledLink>
  );
};

export default LinkItem;
