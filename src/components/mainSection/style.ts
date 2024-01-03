import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledMainSection = styled(motion.section)`
    width: 100%;
    height: 90%;
    position: relative;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`
export const StyledDev = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 0.625rem;
`
export const StyledPhoto = styled.figure`
    width: 250px;
    height: 250px;
    margin-top: -100px;
    margin-bottom: 50px;

    border-radius: 50%;
    overflow: hidden;

    align-self: center;
    
    transition: filter 0.3s ease-in-out;

    &:hover{
        filter: grayscale(100%);
    }
`