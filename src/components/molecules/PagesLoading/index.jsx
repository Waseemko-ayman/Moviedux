import React from 'react';
import * as T from '../../organism/Typography';
import { StyledPagesLoading } from './style';

const PagesLoading = ({ showTitle }) => {
  return (
    <StyledPagesLoading>
      <img src="/fav.png" alt="moviedux" title="moviedux" />
      {showTitle && <T.H1>Moviedux</T.H1>}
    </StyledPagesLoading>
  );
};

export default PagesLoading;
