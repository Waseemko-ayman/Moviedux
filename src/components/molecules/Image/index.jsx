import { StyledImage } from './style';

const TitledImage = ({ src, alt, title, className, onClick, loading }) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      title={title}
      className={className}
      onClick={onClick}
      loading={loading}
    />
  );
};

export default TitledImage;
