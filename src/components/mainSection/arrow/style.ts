import styled, { keyframes } from "styled-components";

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const StyledArrow = styled.div`
    position: absolute;
    right: 45%;
    top: 90%;

    animation: ${bounceAnimation} 3s infinite;
`;