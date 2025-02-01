import './style.css';
import * as T from '../../organism/Typography';

const ContentLoading = ({ size, LoadingText }) => {
  return (
    <div className="loading__container">
      <div
        className="spinner"
        style={{ width: `${size}px`, height: `${size}px` }}
      ></div>
      {LoadingText && <T.Body1>Loading Movies...</T.Body1>}
    </div>
  );
};

export default ContentLoading;