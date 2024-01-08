import styled from "styled-components";

export const StyledOverlay = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);

  position: fixed;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledModalBox = styled.div`
  width: clamp(250px, 80%, 369px);
  height: 500px;
  padding: 15px;
  
  position: relative;

  border-radius: 0.9375rem;

  background: var(--color-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
`;