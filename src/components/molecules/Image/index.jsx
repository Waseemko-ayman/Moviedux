import "./style.css";

const TitledImage = ({ src, alt, title, className, onClick }) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        title={title}
        className={className}
        loading="lazy"
        onClick={onClick}
      />
    </>
  );
};

export default TitledImage;
