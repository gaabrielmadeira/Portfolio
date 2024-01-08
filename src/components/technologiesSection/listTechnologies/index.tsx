import { StyledListTech, StyledLogos } from "./style";
import css from "../../../assets/alternate-css3-logo.svg";
import html from "../../../assets/html-5-logo.svg";
import typeScript from "../../../assets/typescript.svg";
import react from "../../../assets/react.svg";
import styledComponents from "../../../assets/styled-components.svg";
import node from "../../../assets/nodejs.svg";
import postgres from "../../../assets/postgresql.svg";
import git from "../../../assets/git-alt.svg";
import javascript from "../../../assets/javascript-js-square.svg";

export const ListTechnologies = () => {
    return (
        <StyledListTech>
            <li>
                <StyledLogos src={html} alt="Logo CSS" />
            </li>
            <li>
                <StyledLogos src={css} alt="Logo HTML" />
            </li>
            <li>
                <StyledLogos src={javascript} alt="Logo HTML" />
            </li>
            <li>
                <StyledLogos src={typeScript} alt="Logo TypeScript" />
            </li>
            <li>
                <StyledLogos src={react} alt="Logo React" />
            </li>
            <li>
                <StyledLogos src={styledComponents} alt="Logo Styled Components" />
            </li>
            <li>
                <StyledLogos src={node} alt="Logo do Node.js" />
            </li>
            <li>
                <StyledLogos src={postgres} alt="Logo do Postgres" />
            </li>
            <li>
                <StyledLogos src={git} alt="Logo do Git" />
            </li>
        </StyledListTech>
    )
}