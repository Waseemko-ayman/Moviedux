import styled from "styled-components";

export const StyledMoviePage = styled.div`
  position: relative;
  margin-top: 50px;

  header {
    height: 50vh;
    background-size: cover;
    background-position: center;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 40px;
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.6);
    transition: all 0.3s ease-in-out;
  }

  .overlay {
    background-color: rgba(0, 0, 0, 0.7);
    padding: 20px;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    width: fit-content;
  }

  .overlay h1 {
    font-size: 4rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: #ffa100;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.6);
  }

  .overlay p {
    font-size: 1.5rem;
    font-style: italic;
    color: #fff;
  }

  .movie__content {
    padding: 0 20px;
    margin-top: 50px;
  }

  .movie__details {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .movie__info {
    max-width: 50%;
  }

  .movie__info h2 {
    width: fit-content;
    font-size: 2.5rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 15px;
    letter-spacing: 1px;
    padding-bottom: 5px;
  }

  .movie__info p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 25px;
  }

  .movie__rating {
    font-size: 1.1rem;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    color: #fff;
  }

  .movie__rating span {
    font-size: 1.2rem;
  }

  .buttons {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-top: 30px;
  }

  .buttons :is(a, button) {
    max-width: 100%;
    width: 150px;
  }

  .movie__poster__wrapper {
    max-width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .movie__poster__wrapper img {
    width: 100%;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  .movie__poster__wrapper img:hover {
    transform: scale(1.05);
    filter: brightness(1.1);
  }

  @media (max-width: 321px) {
    .movie__info h2 {
      font-size: 1.5rem !important;
    }
    .movie__info p {
      font-size: 14px !important;
    }
  }

  @media (max-width: 426px) {
    .overlay h1 {
      font-size: 1.5rem;
    }
    .movie__info h2 {
      font-size: 2rem;
      margin: 0 auto 15px;
    }
    .movie__info p {
      font-size: 1rem;
    }
    :is(.movie__rating, .buttons) {
      text-align: center;
    }
    .buttons {
      justify-content: center;
    }
    .buttons :is(a, button) {
      width: 100%;
    }
  }

  @media (min-width: 426px) and (max-width: 768px) {
    header {
      height: 50vh;
    }
    .overlay h1 {
      font-size: 2rem;
    }
    .movie__rating {
      font-size: 1rem;
    }
    .movie__poster-wrapper {
      max-width: 100%;
      margin-top: 20px;
    }
    .movie__poster-wrapper img {
      width: 80%;
    }
  }

  @media (min-width: 769px) and (max-width: 991px) {
    .overlay h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 991px) {
    .movie__info {
      max-width: 100%;
    }
    .movie__poster__wrapper {
      display: none;
    }
  }
`;
