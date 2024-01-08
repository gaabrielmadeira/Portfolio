import styled from "styled-components";

export const StyledContainerSkills = styled.section`
    width: 100vw;
    height: 120vh;

    background: var(--color-grey-5);

    @media (min-width: 950px){
        height: 100vh;
    }
`

export const StyledTechnologies = styled.section`
    width: 100%;
    max-width: 1250px;
    height: 100vh;
    padding: 1.25rem;

    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    height: auto;
    margin-top: 2.1875rem;

    display: flex;
    justify-content: center;
`

export const StyledLists = styled.div`
    border: 1px solid red;
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: row;
    gap: 10px;
`

