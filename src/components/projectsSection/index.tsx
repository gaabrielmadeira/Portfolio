import { TitleTwo } from "../../styles/typograph";
import { ListProjects } from "./listProjects";
import { StyledProjectSection, StyledProjectsContainer } from "./style";

export const ProjectsSection = () => {
    return (
        <StyledProjectsContainer>
            <StyledProjectSection>
                <TitleTwo size="large" color="project">Projetos</TitleTwo>
                <ListProjects />
            </StyledProjectSection>
        </StyledProjectsContainer>
    )
}