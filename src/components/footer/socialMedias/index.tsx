import instagramlogo from "../../../assets/instagram.svg";
import linkedinlogo from "../../../assets/linkedin.svg";
import { StyledLogo } from "../../../styles/globalstyles";
import { StyledSocialMedias } from "./style";

export const SocialMedias = () => {
    return (
        <StyledSocialMedias>
                <a href="https://www.instagram.com/gaabmadeira/" target="_blanck">
                    <StyledLogo src={instagramlogo} alt="Logo instragram" />
                </a>
                <a href="https://www.linkedin.com/in/gabriel-madeira-aab40b200/" target="_blanck">
                    <StyledLogo src={linkedinlogo} alt="Logo linkedin" />
                </a>
        </StyledSocialMedias>
    )
}