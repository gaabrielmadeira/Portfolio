import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --color-primary: #1C1914;
        --color-hover-button:  #3c3934;
        --color-grey-0: #F2F2F2;
        --color-grey-1: #3a3a3a;
        --color-grey-2: #3d3d3d;
        --color-grey-3: #939393;
        --color-grey-4: #959188;
        --color-grey-5: #1A1A1A;
        --color-grey-6: #0A0A0A;

        
        --font-primary: "Roboto", sans-serif;
        --font-secundary: "Crimson Text", serif;

        --font-size-0: 3.625rem;
        --font-size-1: 2.625rem;
        --font-size-2: 2rem;
        --font-size-3: 1.75rem;
        --font-size-4: 1.5rem;
        --font-size-5: 1.125rem;
        --font-size-6: 0.875rem;
        --font-size-7: 0.625rem;
    };
`
export const StyledLogo = styled.img`
    width: clamp(25px, 3vw, 50px);
    height: clamp(25px, 3vh, 50px);
`
