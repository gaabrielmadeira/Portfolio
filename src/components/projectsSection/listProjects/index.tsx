import { CgCodeSlash } from "react-icons/cg"
import { TextTwo } from "../../../styles/typograph"
import { StyledContainerTag, StyledLinkRepo, StyledListProjects, StyledProjectsItens, StyledTag } from "./style"

export const ListProjects = () => {
    return (
        <StyledListProjects>
            <StyledProjectsItens color="light">
                <StyledContainerTag>
                    <a href="https://projeto-full-stack-m6-front-end.vercel.app/" target="_blanck" style={{ textDecoration: "none" }}>
                        <TextTwo size="large" color="alternative">
                            ConnectHub
                        </TextTwo>
                    </a>
                    <StyledTag>Fullstack</StyledTag>
                </StyledContainerTag>
                <StyledLinkRepo href="https://github.com/gaabrielmadeira/ConnectHubFullStack" target="_blanck">
                    <TextTwo size="small" color="repo">
                        Repositório
                    </TextTwo>
                    <CgCodeSlash style={{
                        color: "var(--color-grey-0)"
                    }} />
                </StyledLinkRepo>
            </StyledProjectsItens>
            <StyledProjectsItens>
                <StyledContainerTag>
                    <a href="https://kenzie-movie-entrega-template-grupo-8-alex-rho.vercel.app/" target="_blanck" style={{ textDecoration: "none" }}>
                        <TextTwo size="large" color="light">
                            KenzieMovie
                        </TextTwo>
                    </a>
                    <StyledTag>Front End</StyledTag>
                </StyledContainerTag>
                <StyledLinkRepo href="https://github.com/gaabrielmadeira/KenzieMove" target="_blanck">
                    <TextTwo size="small" color="repo">
                        Repositório
                    </TextTwo>
                    <CgCodeSlash style={{
                        color: "var(--color-grey-0)"
                    }} />
                </StyledLinkRepo>
            </StyledProjectsItens>
            <StyledProjectsItens color="light">
                <StyledContainerTag>
                    <a href="https://nu-kenzie-fawn-eight.vercel.app/" target="_blanck" style={{ textDecoration: "none" }}>
                        <TextTwo size="large" color="alternative">
                            Nu Kenzie
                        </TextTwo>
                    </a>
                    <StyledTag>Front End</StyledTag>
                </StyledContainerTag>
                <StyledLinkRepo href="#" target="_blanck">
                    <TextTwo size="small" color="repo">
                        Repositório
                    </TextTwo>
                    <CgCodeSlash style={{
                        color: "var(--color-grey-0)"
                    }} />
                </StyledLinkRepo>
            </StyledProjectsItens>
            <StyledProjectsItens>
                <StyledContainerTag>
                    <a href="https://kenzie-burger-psi.vercel.app/" target="_blanck" style={{ textDecoration: "none" }}>
                        <TextTwo size="large" color="light">
                            Kenzie Burger
                        </TextTwo>
                    </a>
                    <StyledTag>Front End</StyledTag>
                </StyledContainerTag>
                <StyledLinkRepo href="#" target="_blanck">
                    <TextTwo size="small" color="repo">
                        Repositório
                    </TextTwo>
                    <CgCodeSlash style={{
                        color: "var(--color-grey-0)"
                    }} />
                </StyledLinkRepo>
            </StyledProjectsItens>
        </StyledListProjects>
    )
}