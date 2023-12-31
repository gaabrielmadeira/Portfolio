import { useContext } from "react";
import { ButtonPrimary } from "../../styles/button";
import { GetInTouch } from "./getInTouch";
import { SocialMedias } from "./socialMedias";
import { StyledButtonCentralizer, StyledFooter, StyledFooterContainer } from "./style";
import { ContactContext } from "../../providers/contactContext";
import { Element } from "react-scroll";

export const Footer = () => {
    const { openModal } = useContext(ContactContext);

    return (
        <Element name="contacts">
            <StyledFooterContainer>
                <StyledFooter>
                    <GetInTouch />
                    <StyledButtonCentralizer>
                        <ButtonPrimary onClick={openModal}>CONTATE-ME</ButtonPrimary>
                    </StyledButtonCentralizer>
                    <SocialMedias />
                </StyledFooter>
            </StyledFooterContainer>
        </Element>
    )
}