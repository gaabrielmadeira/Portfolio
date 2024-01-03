import { useEffect, useState } from "react";
import { ContainerCentralizer } from "../../styles/container";
import { StyledHeader, StyledNavigation } from "./style";
import { RxHamburgerMenu } from "react-icons/rx";
import { ListMenu } from "./listMenu";

export const Header = () => {
    const [isMobile, setMobile] = useState<boolean>(false)

    useEffect(() => {
        const handleSize = () => {
            setMobile(window.innerWidth <= 768)
            console.log(window.innerWidth)
        };

        window.addEventListener("resize", handleSize)

        const delay = 3000;
        const timeoutId = setTimeout(handleSize, delay);

        return () => {
            window.removeEventListener("resize", handleSize);
            clearTimeout(timeoutId);
        }
    }, [])

    return (
        <StyledHeader>
            <ContainerCentralizer>
                <StyledNavigation>
                    {isMobile ? <button> <RxHamburgerMenu style={{
                        color: "var(--color-white)",
                        width: "25px",
                        height: "25px"
                    }} /> </button> : <ListMenu />}
                </StyledNavigation>
            </ContainerCentralizer>
        </StyledHeader>
    )
};