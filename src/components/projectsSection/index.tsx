import { TitleTwo } from "../../styles/typograph";
import { ListProjects } from "./listProjects";
import { StyledProjectSection, StyledProjectsContainer } from "./style";
import { Element } from "react-scroll";

export const ProjectsSection = () => {
    return (
        <Element name="projects">
            <StyledProjectsContainer id="projects">
                <StyledProjectSection>
                    <TitleTwo size="large" color="project">Projetos</TitleTwo>
                    <ListProjects />
                </StyledProjectSection>
            </StyledProjectsContainer>
        </Element>
    )
}