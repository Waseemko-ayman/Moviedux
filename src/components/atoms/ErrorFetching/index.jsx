import * as T from '../../organism/Typography';
import { StyledError } from './style';

const ErrorFetching = ({ errorText }) => {
  return (
    <StyledError>
      <T.H1>{errorText}</T.H1>
    </StyledError>
  );
};

export default ErrorFetching;
