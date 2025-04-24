import * as T from '../../organism/Typography';
import { StyledLoading } from './style';

const ContentLoading = ({ size, LoadingText }) => {
  return (
    <StyledLoading width={`${size}px`} height={`${size}px`}>
      <div></div>
      {LoadingText && <T.Body1>Loading Movies...</T.Body1>}
    </StyledLoading>
  );
};

export default ContentLoading;
