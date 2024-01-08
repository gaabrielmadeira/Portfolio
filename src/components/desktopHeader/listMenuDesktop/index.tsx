import { TextButtonDesktop } from "../../../styles/typograph";
import { StyledMenuDesktop } from "./style";
import { Link } from 'react-scroll';


export const ListMenuDesktop = () => {
    return (
        <StyledMenuDesktop>
            <li>
                <Link to="about" smooth={true} duration={500}>
                    <TextButtonDesktop size="small">Sobre mim</TextButtonDesktop>
                </Link>
            </li>
            <li>
                <Link to="skills" smooth={true} duration={500}>
                    <TextButtonDesktop size="small">Habilidades</TextButtonDesktop>
                </Link>
            </li>
            <li>
                <Link to="projects" smooth={true} duration={500}>
                    <TextButtonDesktop size="small">Projetos</TextButtonDesktop>
                </Link>
            </li>
            <li>
                <Link to="contacts" smooth={true} duration={500}>
                    <TextButtonDesktop size="small">Contatos</TextButtonDesktop>
                </Link>
            </li>
        </StyledMenuDesktop>
    )
} 