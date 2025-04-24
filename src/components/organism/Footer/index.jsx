import { StyledFooter } from './style';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <p>&copy; {currentYear} Moviedux, All rights reserved.</p>
    </StyledFooter>
  );
};

export default Footer;
