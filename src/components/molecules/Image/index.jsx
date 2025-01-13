import "./style.css";

const TitledImage = ({ src, alt, title, className, onClick, loading }) => {
  return (
    <>
      <img
        src={src}
        alt={alt}
        title={title}
        className={className}
        onClick={onClick}
        loading={loading}
      />
    </>
  );
};

export default TitledImage;
