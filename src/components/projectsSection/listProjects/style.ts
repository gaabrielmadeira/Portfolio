import styled, { css } from "styled-components";

export const StyledListProjects = styled.ul`
    width: 100%;
    height: 100%;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
`

interface IStyledProjectsItens {
    color?: "light"
}

export const StyledProjectsItens = styled.li<IStyledProjectsItens>`
    width: clamp(155px, 20vw, 250px);
    height: 250px;

    border-radius: 3px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    ${({color}) => {
        switch (color) {
            case "light":
                return css`
                    background: var(--color-grey-4);
                `
            default:
                return css`
                     background: var(--color-grey-2);
                `
        }
    }}
`

export const StyledTag = styled.span`
    width: 60px;
    height: 20px;

    background: var(--color-grey-5);
    border-radius: 8px;
    padding: 0.3125rem;

    font-family: var(--font-primary);
    color: var(--color-grey-0);
    font-weight: 700;
    font-size: var(--font-size-7);
    text-align: center;
`

export const StyledContainerTag = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`