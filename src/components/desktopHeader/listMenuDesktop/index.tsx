import { TextButtonDesktop } from "../../../styles/typograph";
import { StyledMenuDesktop, StyledItensMenuDesktop, StyledIconDesktop } from "./style";


export const ListMenuDesktop = () => {
    return (
        <StyledMenuDesktop>
            <StyledItensMenuDesktop>
                <StyledIconDesktop />
                <TextButtonDesktop size="small">Home</TextButtonDesktop>
            </StyledItensMenuDesktop>
            <StyledItensMenuDesktop>
                <StyledIconDesktop />
                <TextButtonDesktop size="small">Sobre mim</TextButtonDesktop>
            </StyledItensMenuDesktop>
            <StyledItensMenuDesktop>
                <StyledIconDesktop />
                <TextButtonDesktop size="small">Projetos</TextButtonDesktop>
            </StyledItensMenuDesktop>
            <StyledItensMenuDesktop>
                <StyledIconDesktop />
                <TextButtonDesktop size="small">Contatos</TextButtonDesktop>
            </StyledItensMenuDesktop>
        </StyledMenuDesktop>
    )
} 