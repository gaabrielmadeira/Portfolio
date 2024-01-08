import { StyledHeader, StyledNavigation } from "./style";
import { ListMenu } from "./listMenu";
import { TitleThree } from "../../styles/typograph";

export const Header = () => {

    return (
            <StyledHeader>
                <TitleThree size="large" color="alternative">GM</TitleThree>
                <StyledNavigation>
                    <ListMenu />
                </StyledNavigation>
            </StyledHeader>
    )
};