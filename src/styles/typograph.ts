import { motion } from "framer-motion";
import styled, { css } from "styled-components";

interface ITitleProps {
    color?: "alternative";
    size: "small" | "medium" | "large";
}

const Title = css<ITitleProps>`
    ${({size}) => {
        switch (size) {
            case "large":
                return css`
                    font-size: clamp(var(--font-size-2), 100vw, var(--font-size-1));
                `
            case "medium":
                return css`
                    font-size: clamp(var(--font-size-3), 100vw, var(--font-size-2));
                `
            case "small":
                return css`
                    font-size: clamp(var(--font-size-4), 5vw, var(--font-size-3));
                `
        }
    }}
    font-family: var(--font-primary);
    font-weight: 700;
    ${({color}) => {
      switch (color) {
        case "alternative":
            return css`
                color: var(--color-primary);
            `
        default:
            return css`
                color: var(--color-white);
            `
      } 
    }}
    
`

export const TitleOne = styled.h1<ITitleProps>`
    ${Title}
`

export const TitleAlternative = styled(motion.span)<ITitleProps>`
    ${Title}
`

export const TitleThree = styled(motion.h3)<ITitleProps>`
    ${Title}
`

export const TextMenu = styled.li`
    font-family: var(--font-primary);
    font-size: clamp(var(--font-size-7), 3vw, var(--font-size-8));
    color: var(--color-white);
`