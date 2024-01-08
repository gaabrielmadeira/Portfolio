import { useContext, useEffect } from "react";
import { StyledButtonClose } from "../../styles/button";
import { TitleTwo } from "../../styles/typograph";
import { ContactForm } from "./contactForm";
import { StyledOverlay, StyledModalBox } from "./style";
import { ContactContext } from "../../providers/contactContext";


export const ContactModal = () => {
    const { closeModal } = useContext(ContactContext);

    useEffect(() => {
        const handleEscapeClick = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeModal()
            }
        }

        window.addEventListener("keydown", handleEscapeClick);

        return () => {
            window.removeEventListener("keydown", handleEscapeClick)
        }
    }, [])

    return (
        <StyledOverlay role="dialog">
            <StyledModalBox>
                <StyledButtonClose onClick={closeModal} />
                <TitleTwo size="small">Entre em contato</TitleTwo>
                <ContactForm />
            </StyledModalBox>
        </StyledOverlay>
    )
}