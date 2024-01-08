import { motion } from "framer-motion";
import styled from "styled-components";
import backgroundmain from "../../assets/backgroundhomepage.png";
import backgroundmobile from "../../assets/backgroundresponsive.png";

export const StyledMainSection = styled(motion.section)`
    width: 100%;
    height: 100vh;
    padding: 0.625rem;

    position: relative;

    background-image: url(${backgroundmobile});
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 980px) {
        background-image: url(${backgroundmain});
        background-repeat: no-repeat;
        background-size: cover;
    }
`
export const StyledTitleDiv = styled.div`
    width: 100%;
    height: auto;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.9375rem;

    @media (min-width: 980px) {
        position: absolute;
        transform: translateX(-20%);
    }
`

export const StyledButtonContainer = styled.div`
    width: auto;
    height: auto;

    margin-top: 30px;
`