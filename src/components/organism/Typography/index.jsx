import "./style.css";

export const H1 = ({ children, className }) => {
  return <h1 className={`t__h1 ${className}`}>{children}</h1>;
};

export const H2 = ({ children, className }) => {
  return <h2 className={`t__h2 ${className}`}>{children}</h2>;
};

export const H3 = ({ children, className }) => {
  return <h3 className={`t__h3 ${className}`}>{children}</h3>;
};

export const H4 = ({ children, className }) => {
  return <h4 className={`t__h4 ${className}`}>{children}</h4>;
};

export const H5 = ({ children, className }) => {
  return <h5 className={`t__h5 ${className}`}>{children}</h5>;
};

export const H6 = ({ children, className }) => {
  return <h6 className={`t__h6 ${className}`}>{children}</h6>;
};

export const Body1 = ({ children }) => {
  return <p className="t__body1">{children}</p>;
};

export const Body2 = ({ children }) => {
  return <p className="t__body2">{children}</p>;
};

export const Caption = ({ children }) => {
  return <span className="t__caption">{children}</span>;
};
