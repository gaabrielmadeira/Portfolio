import styled from "styled-components";

export const StyledHeader = styled.header`
    width: 100%;
    max-width: 1250px;
    height: 80px;

    margin-left: auto;
    margin-right: auto;
    padding: 0.625rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.25rem;

    @media (min-width: 980px) {
        display: none;
    }
`
export const StyledNavigation = styled.nav`
    width: clamp(150px, 100%, 450px);
    height: 100%;
`

