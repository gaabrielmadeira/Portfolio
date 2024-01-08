import styled from "styled-components";

export const StyledAboutMeSection = styled.section`
    width: 100%;
    max-width: 1250px;
    height: 100vh;
    position: relative;

    padding: 1.25rem;
    margin-right: auto;
    margin-left: auto;
    

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.875rem;

    @media (min-width: 950px) {
        height: 400px;

        flex-direction: row;
        margin-top: 40px;
    }
`
export const StyledTextAboutMe  = styled.div`
    width: 100%;
    height: 2px;
    background: var(--color-grey-2);

    @media (min-width: 950px) {
        display: none;
    }
`
export const StyledTitle = styled.div`
    width: 100%;
    height: auto;

    @media (min-width: 950px) {
        width: 30%;
    }
`

export const StyledText = styled.div`
    width: 100%;
    height: auto;
`
