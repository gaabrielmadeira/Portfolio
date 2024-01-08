import instagramlogo from "../../../assets/instagram.svg";
import linkedinlogo from "../../../assets/linkedin.svg";
import { StyledLogo } from "../../../styles/globalstyles";
import { StyledSocialMedias } from "./style";
import githublogo from "../../../assets/github.svg";

export const SocialMedias = () => {
    return (
        <StyledSocialMedias>
                <a href="https://www.instagram.com/gaabmadeira/" target="_blanck">
                    <StyledLogo src={instagramlogo} alt="Logo instragram" />
                </a>
                <a href="https://www.linkedin.com/in/gabriel-madeira-aab40b200/" target="_blanck">
                    <StyledLogo src={linkedinlogo} alt="Logo linkedin" />
                </a>
                <a href="https://github.com/gaabrielmadeira" target="_blanck">
                    <StyledLogo src={githublogo} alt="Logo github" />
                </a>
        </StyledSocialMedias>
    )
}