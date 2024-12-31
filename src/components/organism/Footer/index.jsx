import "./style.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p className="footer-text">
        &copy; {currentYear} Moviedux, All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
