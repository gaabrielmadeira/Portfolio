import { IoIosArrowDropdown } from "react-icons/io";
import { StyledArrow } from "./style";


export const Arrow = () =>  {
    return(
        <StyledArrow>
            <IoIosArrowDropdown style={{
                color: "var(--color-primary)",
                width: "40px",
                height: "40px"
            }} />
        </StyledArrow>
    )
}