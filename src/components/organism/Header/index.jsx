import TitledImage from '../../molecules/Image';
import Navbar from '../Navbar';
import { StyledHeader } from './style';

const Header = () => {
  return (
    <StyledHeader>
      <TitledImage src="/assets/logo.png" alt="moviedux" title="moviedux" />
      <h2>It's time for popcorn! Find your next movie here.</h2>
      <Navbar />
    </StyledHeader>
  );
};

export default Header;
