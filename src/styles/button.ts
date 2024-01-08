import styled from "styled-components";
import { IoClose } from "react-icons/io5";

export const ButtonPrimary = styled.button`
    width: clamp(150px, 3vw, 250px);
    height: 45px;
    
    border: 2px solid var(--color-grey-0);
    background: transparent;
    
    color: var(--color-grey-0);
    font-family: var(--font-primary);

    &:hover{
        background: var(--color-hover-button);
    }

    &:active{
        background: var(--color-hover-button);
    }
`

export const StyledButtonClose = styled(IoClose)`
    width: 20px;
    height: 20px;

    position: absolute;
    right: 20px;
    top: 20px;

    color: var(--color-grey-0);
    cursor: pointer;
`
