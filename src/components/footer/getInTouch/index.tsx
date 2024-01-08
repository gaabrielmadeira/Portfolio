import { TextTwo, TitleThree } from "../../../styles/typograph";
import logoemail from "../../../assets/email.svg";
import logozap from "../../../assets/whatsapp.svg";
import { StyledGetInTouch, StyledLogoContainer } from "./style";
import { StyledLogo } from "../../../styles/globalstyles";

export const GetInTouch = () => {
    return (
        <StyledGetInTouch>
            <TitleThree size="small">ENTRE EM CONTATO</TitleThree>
            <StyledLogoContainer>
                <StyledLogo src={logoemail} alt="Logo Email" />
                <TextTwo size="large" color="light">gabscastello95@gmail.com</TextTwo>
            </StyledLogoContainer>
            <StyledLogoContainer>
                <StyledLogo src={logozap} alt="Logo Whatsapp" />
                <TextTwo size="large" color="light">(53) 997090585</TextTwo>
            </StyledLogoContainer>
        </StyledGetInTouch>
    )
}