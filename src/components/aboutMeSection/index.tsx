import { CgCode, CgCodeSlash } from "react-icons/cg";
import { TextTwo, TitleTwo } from "../../styles/typograph";
import { StyledAboutMeSection, StyledText, StyledTextAboutMe, StyledTitle } from "./styles";

export const AboutMeSection = () => {
    return (
        <StyledAboutMeSection>
            <StyledTitle>
                <TitleTwo size="large" color="about">Sobre mim</TitleTwo>
            </StyledTitle>
            <StyledTextAboutMe></StyledTextAboutMe>
            <StyledText>
                <TextTwo size="large" color="light">
                    <CgCode style={{
                        color: "var(--color-grey-3)"
                    }} /> <br />
                    Olá, eu sou <span>Gabriel Madeira</span>, um entusiasta de desenvolvimento web. Meu caminho começou na Kenzie Academy Brasil, onde me dediquei a um curso de 2000 horas em Desenvolvimento Full Stack.
                    Atualmente, minha paixão reside na criação de experiências digitais usando tecnologias como TypeScript, React, HTML, CSS, Styled Components (frontend), e Express.js com PostgreSQL (backend). Embora minha jornada profissional esteja no início, estou comprometido em aplicar meu conhecimento para inovar e criar soluções impactantes.
                    Este é meu espaço para compartilhar minha jornada e projetos, representando meu constante crescimento como desenvolvedor web. Bem-vindo ao meu mundo digital! <br />
                    <CgCodeSlash style={{
                        color: "var(--color-grey-3)"
                    }} />
                </TextTwo>
            </StyledText>
        </StyledAboutMeSection>
    )
};