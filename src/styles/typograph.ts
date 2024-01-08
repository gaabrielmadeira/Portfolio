import styled, { css } from "styled-components";

interface ITitleProps {
    color?: "alternative" | "about" | "project";
    size: "small" | "medium" | "large";
}

const Title = css<ITitleProps>`
    ${({ size }) => {
        switch (size) {
            case "large":
                return css`
                    font-size: clamp(var(--font-size-2), 5vw, var(--font-size-0));
                    font-weight: 700;
                `
            case "medium":
                return css`
                    font-size: clamp(var(--font-size-3), 5vw, var(--font-size-2));
                    font-weight: 500;
                `
            case "small":
                return css`
                    font-size: clamp(var(--font-size-4), 5vw, var(--font-size-3));
                    font-weight: 400;
                `
        }
    }}
    font-family: var(--font-secundary);
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.5);
    ${({ color }) => {
        switch (color) {
            case "alternative":
                return css`
                color: var(--color-primary);
            `
            case "about":
                return css`
                    color: var(--color-grey-1);
                    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
                `
            case "project":
                return css`
                    color: var(--color-grey-6);
                `
            default:
                return css`
                    color: var(--color-grey-0);
            `
        }
    }} 
`

interface ITextProps {
    color?: "alternative" | "light";
    size: "small" | "large";
}

export const Text = css<ITextProps>`
    font-family: var(--font-secundary);
    text-align: justify;
    font-weight: 700;
    line-height: 1.5;
    ${({ size }) => {
        switch (size) {
            case "small":
                return css`
                    font-size: clamp(var(--font-size-7), 3vw, var(--font-size-6));
                `
            case "large":
                return css`
                    font-size: clamp(var(--font-size-6), 3vw, var(--font-size-5));
                `
        }
    }}

    ${({ color }) => {
        switch (color) {
            case "alternative":
                return css`
                    color: var(--color-grey-5);
                `
            case "light":
                return css`
                    color: var(--color-grey-3);
                `
            default:
                return css`
                    color: var(--color-grey-6);
                `
        }
    }}
`

export const TitleOne = styled.h1<ITitleProps>`
    ${Title}
`

export const TitleAlternative = styled.span<ITitleProps>`
    ${Title}
`

export const TitleTwo = styled.h2<ITitleProps>`
    ${Title}
`

export const TitleThree = styled.h3<ITitleProps>`
    ${Title}
`

export const TextTwo = styled.p<ITextProps>`
    ${Text}
`
export const TextButton = styled.button<ITextProps>`
    ${Text}
`
export const TextButtonDesktop = styled.button<ITitleProps>`
    ${Title}
`


