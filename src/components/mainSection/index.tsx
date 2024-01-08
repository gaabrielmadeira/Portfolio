import { CgCodeSlash } from "react-icons/cg";
import { ButtonPrimary } from "../../styles/button";
import { TitleOne, TitleTwo } from "../../styles/typograph";
import { StyledButtonContainer, StyledMainSection, StyledTitleDiv } from "./style";
import { useContext } from "react";
import { ContactContext } from "../../providers/contactContext";
import { DesktopHeader } from "../desktopHeader";

export const MainSection = () => {
    const {openModal} = useContext(ContactContext);

    return (
            <StyledMainSection>
                <DesktopHeader />
                <StyledTitleDiv>
                    <TitleOne size="large">Gabriel Madeira</TitleOne>
                    <TitleTwo size="small">Desenvolvedor web <CgCodeSlash style={{
                        width: "15px",
                        height: "15px"
                    }} /></TitleTwo>
                    <StyledButtonContainer>
                            <ButtonPrimary onClick={openModal}>CONTATE-ME</ButtonPrimary>
                    </StyledButtonContainer>
                </StyledTitleDiv>
            </StyledMainSection>
    )
}