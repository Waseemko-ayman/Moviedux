import "./style.css";
import * as T from "../../organism/Typography";

const ContentLoading = () => {
  return (
    <div className="loading__container">
      <div className="spinner"></div>
      <T.Body1>Loading Movies...</T.Body1>
    </div>
  );
};

export default ContentLoading;
