import { z } from "zod";

export const ContactFormSchema = z.object({
    from_name: z.string().min(1, "Por favor preencha o campo com um nome."),
    email: z.string().email("Por favor preencha o campo com um email válido."),
    message: z.string().min(1, "Por favor insira uma mensagem.")
})

export type TContactFormSchema = z.infer<typeof ContactFormSchema>;