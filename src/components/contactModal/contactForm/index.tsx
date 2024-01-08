import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { ButtonPrimary } from "../../../styles/button"
import { StyledInput, StyledTextArea } from "../../../styles/form"
import { StyledForm } from "./style"
import { ContactFormSchema, TContactFormSchema } from "./contactSchema";
import { TextTwo } from "../../../styles/typograph";
import emailjs from "@emailjs/browser";
import { IContactMessage } from "../../../providers/types";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { ContactContext } from "../../../providers/contactContext";

export const ContactForm = () => {
    const [sending, setSending] = useState<boolean>(false)
    const { closeModal } = useContext(ContactContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<TContactFormSchema>({
        resolver: zodResolver(ContactFormSchema)
    })

    const submit: SubmitHandler<TContactFormSchema> = (formData: IContactMessage) => {
        setSending(true)
        const templateParams = formData;

        emailjs.send(
            "service_aawzc1t",
            "template_4k8jlbd",
            templateParams,
            "4WupWa5uXT73Ak2CL"
        )
            .then((response) => {
                if (response.status === 200) {
                    toast.success("Email enviado!", {
                        theme: "dark",
                    });
                    reset();
                    setSending(false)
                    closeModal()
                } else {
                    toast.error("Ops, algo deu errado!", {
                        theme: "dark",
                    });
                    reset();
                    setSending(false)
                    closeModal()
                }
            }), (error: unknown) => {
                console.log(error)
            }
    };

    return (
        <StyledForm onSubmit={handleSubmit(submit)}>
            <StyledInput
                type="text"
                placeholder="Nome"
                {...register("from_name")}
            />
            {errors.from_name && (
                <TextTwo size="small" color="light">
                    {errors.from_name.message}
                </TextTwo>
            )}
            <StyledInput
                type="email"
                placeholder="E-mail"
                {...register("email")}
            />
            {errors.email && (
                <TextTwo size="small" color="light">
                    {errors.email.message}
                </TextTwo>
            )}
            <StyledTextArea
                placeholder="Mensagem"
                maxLength={500}
                {...register("message")}>
            </StyledTextArea>
            {errors.message && (
                <TextTwo size="small" color="light">
                    {errors.message.message}
                </TextTwo>
            )}
            <ButtonPrimary>
                {sending ? "Enviado..." : "Enviar"}
            </ButtonPrimary>
        </StyledForm>
    )
}