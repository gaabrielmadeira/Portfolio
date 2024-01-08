import { createContext, useState } from "react";
import { IcontactContextProps } from "./types";

interface IContactContext {
    modalIsOpen: boolean
    openModal: () => void;
    closeModal: () => void;
}

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({children}: IcontactContextProps) => {
    const [modalIsOpen, setOpenModal] = useState<boolean>(false)

    const openModal = () => {
        setOpenModal(true)
    }

    const closeModal = () => {
        setOpenModal(false)
    }

    return(
        <ContactContext.Provider value={{
            modalIsOpen,
            openModal,
            closeModal
        }}>
            {children}
        </ContactContext.Provider>
    )
}

