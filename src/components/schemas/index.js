import * as yup from "yup";

export const formSchemaLogin = yup.object().shape({
    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),
    password: yup.string().required("Senha obrigatória"),
});

export const formSchemaRegister = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),

    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),

    phone: yup.string().required("Telefone obrigatório"),

    password: yup.string().required("Senha obrigatória"),

    password2: yup
        .string()
        .required("Confirmar sua senha é obrigatório")
        .oneOf([yup.ref("password")], "Senhas diferentes"),
});

export const formSchemaContact = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),

    email: yup.string().required("E-mail obrigatório").email("E-mail inválido"),

    phone: yup.string().required("Telefone obrigatório"),
});
