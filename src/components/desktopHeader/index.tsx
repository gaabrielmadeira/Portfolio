import { ListMenuDesktop } from "./listMenuDesktop";
import { StyledHeaderDesktop, StyledHeaderDesktopContainer, StyledNavigationHeader } from "./style";

export const DesktopHeader = () => {
    return (
        <StyledHeaderDesktopContainer>
            <StyledHeaderDesktop>
                <StyledNavigationHeader>
                    <ListMenuDesktop />
                </StyledNavigationHeader>
            </StyledHeaderDesktop>
        </StyledHeaderDesktopContainer>
    )
}