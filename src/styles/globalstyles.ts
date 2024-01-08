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

        --font-size-0: 58px;
        --font-size-1: 42px;
        --font-size-2: 32px;
        --font-size-3: 28px;
        --font-size-4: 24px;
        --font-size-5: 18px;
        --font-size-6: 14px;
        --font-size-7: 10px;
    };
`
export const StyledLogo = styled.img`
    width: clamp(25px, 3vw, 50px);
    height: clamp(25px, 3vh, 50px);
`
