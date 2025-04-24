import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #ffffff;

  div {
    width: ${(props) => props.width || '50px'};
    height: ${(props) => props.height || '50px'};
    border: 6px solid #121212;
    border-top-color: #f39c12;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
  }

  p {
    margin-top: 15px;
    font-size: 1.2rem;
    letter-spacing: 0.5px;
  }
`;