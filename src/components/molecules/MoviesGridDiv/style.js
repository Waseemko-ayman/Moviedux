import styled from "styled-components";

export const StyledMoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 495px) and (max-width: 594px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media (max-width: 322px) and (max-width: 494px) {
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  }
`;