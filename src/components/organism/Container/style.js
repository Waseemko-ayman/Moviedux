import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 90%;
  }

  @media (min-width: 992px) {
    width: 95%;
  }

  @media (min-width: 1200px) {
    width: 1300px;
  }
`;