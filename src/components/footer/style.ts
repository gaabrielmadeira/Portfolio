import styled from "styled-components";

export const StyledFooterContainer = styled.footer`
    width: 100vw;
    height: 220px;

    background: var(--color-primary);
`

export const StyledFooter = styled.section`
    width: 100%;
    max-width: 1250px;
    height: 100%;

    margin-left: auto;
    margin-right: auto;
    padding: 0.9375rem;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 0.9375rem;

    @media (min-width: 950px){
        flex-direction: row;
        justify-content: space-between;
    }
`

export const StyledButtonCentralizer = styled.div`
    width: auto;
    height: auto;

    @media (min-width: 950px) {
        position: absolute;
        right: 50%;
        transform: translateX(50%);
    }
`