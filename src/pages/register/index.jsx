import React, { useContext } from "react";
import { StyledDivRegister } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/user.contexts";
import { Link } from "react-router-dom";
import { formSchemaRegister } from "../../components/schemas";

export const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchemaRegister),
        mode: "onBlur",
    });

    const { onSubmitRegister } = useContext(UserContext);
    return (
        <StyledDivRegister>
            <form onSubmit={handleSubmit(onSubmitRegister)}>
                <div>
                    <h2>Cadastro</h2>
                    <Link to={"/"}>Retornar para o login</Link>
                </div>

                <section>
                    <input
                        type="text"
                        placeholder="Digite seu nome aqui"
                        {...register("name")}
                    />
                    <span>{errors.name?.message}</span>
                </section>

                <section>
                    <input
                        type="email"
                        placeholder="Digite seu email aqui"
                        {...register("email")}
                    />
                    <span>{errors.email?.message}</span>
                </section>

                <section>
                    <input
                        type="tel"
                        placeholder="Digite seu telefone"
                        {...register("phone")}
                    />
                    <span>{errors.phone?.message}</span>
                </section>

                <section>
                    <input
                        type="password"
                        placeholder="Digite sua senha"
                        {...register("password")}
                    />
                    <span>{errors.password?.message}</span>
                </section>

                <section>
                    <input
                        type="password"
                        placeholder="Confirme sua senha"
                        {...register("password2")}
                    />
                    <span>{errors.password2?.message}</span>
                </section>

                <button type="submit">Cadastrar</button>
            </form>
        </StyledDivRegister>
    );
};
