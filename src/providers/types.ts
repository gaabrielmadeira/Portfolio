export interface IcontactContextProps {
    children: React.ReactNode
}

export type IContactMessage = {
    from_name: string;
    email: string;
    message: string;
}