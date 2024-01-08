import styled from "styled-components";

export const StyledHeaderDesktopContainer = styled.div`
    width: auto;
    height: auto;

    background: transparent;

    display: none;

    position: absolute;
    right: 50%;
    top: 20px;
    transform: translateX(50%);

    @media (min-width: 980px) {
        display: block;
    }
`

export const StyledHeaderDesktop = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.25rem;
`

export const StyledNavigationHeader = styled.nav`
    width: 100%;
    height: 100%;
`