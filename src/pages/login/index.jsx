import React, { useContext } from "react";
import { UserContext } from "../../contexts/user.contexts";
import { StyledDivLogin } from "./style";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaLogin } from "../../components/schemas";

export const Login = () => {
    const { onSubmitLogin } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchemaLogin),
        mode: "onBlur",
    });

    return (
        <StyledDivLogin>
            <form onSubmit={handleSubmit(onSubmitLogin)}>
                <h2>Login</h2>
                <section>
                    <input
                        type="email"
                        placeholder="Digite seu email"
                        {...register("email")}
                    />
                    <span>{errors.email?.message}</span>
                </section>
                <section>
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        {...register("password")}
                    />
                    <span>{errors.password?.message}</span>
                </section>
                <button type="submit">Entrar</button>
                <p>Ainda não tem uma conta? Cadastre-se</p>
                <Link to={"/register"}>Cadastrar</Link>
            </form>
        </StyledDivLogin>
    );
};
