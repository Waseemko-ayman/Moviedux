import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
`;

export const StyledPagesLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 100px;
  }

  h1 {
    color: #ffa100;
    font-size: 2.5rem;
    font-weight: bold;
    animation: ${pulse} 1.5s ease-in-out infinite;
  }
`;
