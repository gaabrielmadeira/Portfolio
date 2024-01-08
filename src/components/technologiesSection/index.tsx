import { TextTwo, TitleTwo } from "../../styles/typograph";
import { ListTechnologies } from "./listTechnologies";
import { StyledContainerSkills, StyledTechnologies, TitleContainer } from "./style";
import { Element } from "react-scroll";


export const TechnologiesSection = () => {
    return (
        <Element name="skills">
            <StyledContainerSkills>
                <StyledTechnologies>
                    <TitleContainer>
                        <TitleTwo size="large">Habilidades</TitleTwo>
                    </TitleContainer>
                    <div>
                        <TextTwo size="large" color="light">
                            Possuo conhecimentos em JavaScript(ESC6), TypeScript, HTML, CSS e React.JS, assim como, Web Semântica. Minha experiência prática inclui o uso de bibliotecas para o ecossistema React.js, como Axios para requisições, React-Router-Dom para rotas, zod para validação de formulários e React-Hook Form para gerenciamento simplificado de formulário. Utilização de ContextAPI para estados globais reforça meu domínio na área.
                            Possuo conhecimento da biblioteca Styled-Components e familiaridade com Figma contribuindo para a criação de designs atraentes.
                            Experiência com trabalho em equipe aplicando metodologias ágeis, aliado ao domínio do Git para versionamento, me permitem contribuir de forma significativa em projetos.
                            Possuo também conhecimento no backend, tendo vários projetos feitos com as tecnologias Node.js, Express.js, PostgreSQL e TypeORM. Minha experiência se estende à criação de APIs REST robustas e escaláveis, bem como à integração eficiente de bancos de dados PostgreSQL para suportar aplicações de alto desempenho.
                        </TextTwo>
                    </div>
                    <ListTechnologies />
                </StyledTechnologies>
            </StyledContainerSkills>
        </Element>
    )
}