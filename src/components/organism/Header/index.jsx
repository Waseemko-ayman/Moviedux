import "./style.css";
import TitledImage from "../../molecules/Image";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header>
      <TitledImage
        src="/assets/logo.png"
        alt="moviedux"
        title="moviedux"
        className="logo"
      />
      <h2 className="app-subtitle">
        It's time for popcorn! Find your next movie here.
      </h2>
      <Navbar />
    </header>
  );
};

export default Header;
