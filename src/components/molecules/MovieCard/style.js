import styled from "styled-components";

export const StyledMovieCard = styled.div`
  text-align: center;
  background-color: #272727;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.5);

  &:hover {
    transform: scale(1.03);
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
    cursor: pointer;
  }

  .movie__card__info {
    padding: 15px 15px 5px 15px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: bold;
  }

  h3 + div {
    margin-top: 5px;
  }

  h3 + div span:first-child {
    font-size: 0.9rem;
    margin-right: 10px;
  }

  h3 + div span:last-child {
    font-size: 0.9rem;
    font-weight: bold;
    background: #141414;
    padding: 3px 10px;
    border-radius: 50px;
  }

  .rating-good {
    color: rgb(148, 255, 105);
  }

  .rating-ok {
    color: rgb(255, 209, 123);
  }

  .rating-bad {
    color: rgb(255, 123, 123);
  }

  label {
    margin: 10px auto;
    position: relative;
    display: inline-block;
    width: 180px;
    height: 23px;
  }

  label input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #141414;
    border-radius: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.4s;
  }

  span.slider:before {
    position: absolute;
    content: "";
    width: 20px;
    height: 20px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  span.slider span {
    color: #fff;
    font-size: 15px;
    width: 100%;
    line-height: 24px;
    transition: opacity 0.4s ease;
  }

  input:checked + span.slider:before {
    transform: translateX(156px); /* Move the circle to the other side */
  }

  input:checked + span.slider {
    background-color: #ffa100;
  }

  label + div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding-bottom: 12px;
  }

  button {
    width: 180px;
    padding: 5px 10px;
    font-size: 13px;
    border-radius: 50px;
  }

  @media (max-width: 495px) {
    label {
      width: 170px;
    }
    span.slider span {
      font-size: 13px;
    }
    input:checked + .slider:before {
      transform: translateX(146px); /* Move the circle to the other side */
    }
  }
`;
