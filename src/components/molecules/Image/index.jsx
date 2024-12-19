import React from "react";
import "./style.css";

const TitledImage = ({ src, alt, title, className }) => {
  return (
    <>
      <img src={src} alt={alt} title={title} className={className} />
    </>
  );
};

export default TitledImage;
