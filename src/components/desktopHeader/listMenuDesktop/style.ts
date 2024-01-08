import { HiOutlineHashtag } from "react-icons/hi";
import styled from "styled-components";

export const StyledMenuDesktop = styled.ul`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
`
export const StyledItensMenuDesktop = styled.li`
    display: flex;
    align-items: center;
`
export const StyledIconDesktop = styled(HiOutlineHashtag)`
    color: var(--color-grey-3);
`