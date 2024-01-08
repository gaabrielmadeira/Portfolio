import { TextButton } from "../../../styles/typograph";
import { StyledMenu, StyledItensMenu } from "./style";

export const ListMenu = () => {
    return (
        <StyledMenu>
            <StyledItensMenu>
                <TextButton size="large">Home</TextButton>
            </StyledItensMenu>
            <StyledItensMenu>
                <TextButton size="large">Sobre mim</TextButton>
            </StyledItensMenu>
            <StyledItensMenu>
                <TextButton size="large">Projetos</TextButton>
            </StyledItensMenu>
            <StyledItensMenu>
                <TextButton size="large">Contatos</TextButton>
            </StyledItensMenu>
        </StyledMenu>
    )
} 