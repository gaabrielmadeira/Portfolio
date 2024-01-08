import { TextButton } from "../../../styles/typograph";
import { StyledMenu, StyledItensMenu } from "./style";
import { Link } from "react-scroll";

export const ListMenu = () => {
    return (
        <StyledMenu>
            <StyledItensMenu>
                <Link to="about" smooth={true} duration={500}>
                    <TextButton size="large">Sobre</TextButton>
                </Link>
            </StyledItensMenu>
            <StyledItensMenu>
                <Link to="skills" smooth={true} duration={500}>
                    <TextButton size="large">Habilidades</TextButton>
                </Link>
            </StyledItensMenu>
            <StyledItensMenu>
                <Link to="projects" smooth={true} duration={500}>
                    <TextButton size="large">Projetos</TextButton>
                </Link>
            </StyledItensMenu>
            <StyledItensMenu>
                <Link to="contacts" smooth={true} duration={500}>
                    <TextButton size="large">Contatos</TextButton>
                </Link>
            </StyledItensMenu>
        </StyledMenu>
    )
} 