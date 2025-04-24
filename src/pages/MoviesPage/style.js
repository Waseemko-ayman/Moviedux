import styled from "styled-components";

export const StyledMoviesPage = styled.div`
  .no-movies-message {
    text-align: center;
    margin-top: 50px;
  }

  .no-movies-message p {
    font-weight: bold;
    font-size: 1.8rem;
    color: white;
    margin-top: 10px;
  }

  .no-movies-message span {
    color: #ffa100;
    font-size: 4rem;
    font-weight: bold;
  }

  @media (max-width: 426px) {
    .no-movies-message p {
      font-size: 1.5rem;
    }
    .no-movies-message span {
      font-size: 3rem;
    }
  }
`;