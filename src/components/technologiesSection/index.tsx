import { TextTwo, TitleTwo } from "../../styles/typograph";
import { ListTechnologies } from "./listTechnologies";
import { StyledContainerSkills, StyledTechnologies, TitleContainer } from "./style";


export const TechnologiesSection = () => {
    return (
        <StyledContainerSkills>
            <StyledTechnologies>
                <TitleContainer>
                    <TitleTwo size="large">Habilidades</TitleTwo>
                </TitleContainer>
                <div>
                    <TextTwo size="large" color="light">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </TextTwo>
                </div>
                <ListTechnologies />
            </StyledTechnologies>
        </StyledContainerSkills>
    )
}