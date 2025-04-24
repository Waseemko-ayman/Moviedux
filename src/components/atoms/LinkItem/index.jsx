import { Link } from 'react-router-dom';
import { StyledButtonLink } from '../../../styles/common';

const LinkItem = ({ children, linkPath, margin }) => {
  return (
    <StyledButtonLink
      as={Link}
      to={linkPath}
      className={margin ? 'margin' : ''}
    >
      {children}
    </StyledButtonLink>
  );
};

export default LinkItem;
