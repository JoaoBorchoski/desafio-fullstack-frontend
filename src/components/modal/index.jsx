import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { formSchemaContact } from "../schemas";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.contexts";
import { AiOutlineClose } from "react-icons/ai";
import { StyledModalDiv } from "./style";
import Modal from "styled-react-modal";

export function AddContact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchemaContact),
        mode: "onBlur",
    });

    const { modalIsOpen, setIsOpen, onSubmitContact } = useContext(UserContext);

    return (
        <StyledModalDiv>
            <div>
                <section>
                    <h2>Adicionar contato</h2>
                    <button onClick={() => setIsOpen(!modalIsOpen)}>
                        <AiOutlineClose size={25} />
                    </button>
                </section>
                <form onSubmit={handleSubmit(onSubmitContact)}>
                    <section>
                        <input
                            type="text"
                            placeholder="Nome do contato"
                            {...register("name")}
                        />
                        <span>{errors.name?.message}</span>
                    </section>
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
                            type="text"
                            placeholder="Telefone do contato"
                            {...register("phone")}
                        />
                        <span>{errors.phone?.message}</span>
                    </section>

                    <button>Adicionar</button>
                </form>
            </div>
        </StyledModalDiv>
    );
}

export const ModalAddContact = () => {
    const { modalIsOpen, setIsOpen, onSubmitContact } = useContext(UserContext);

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            width: `${window.innerWidth < 1000 ? "95vw" : null}`,
        },
    };

    const custonInput = {
        padding: "8px",
        borderRadius: "16px",
        border: "2px solid var(--color-secondary)",
        height: "40px",
        fontSize: "14px",
        fontFamily: '"Montserrat", sans-serif',
        width: "100%",
    };

    const custonSection = {
        width: "100%",
        position: "relative",
    };

    const custonSpan = {
        fontSize: "12px",
        opacity: "0.7",
        width: "100%",
        position: "absolute",
        bottom: "-15px",
        left: "2%",
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchemaContact),
        mode: "onBlur",
    });

    return (
        <Modal isOpen={modalIsOpen} style={customStyles}>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                }}
            >
                <h2>Adicionar contato</h2>
                <button onClick={() => setIsOpen(!modalIsOpen)}>
                    <AiOutlineClose size={25} />
                </button>
            </div>

            <form
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: `${window.innerWidth < 1000 ? "100%" : "20vw"}`,
                    gap: "1rem",
                }}
                onSubmit={handleSubmit(onSubmitContact)}
            >
                <section style={custonSection}>
                    <input
                        style={custonInput}
                        type="text"
                        placeholder="Nome do contato"
                        {...register("name")}
                    />
                    <span style={custonSpan}>{errors.name?.message}</span>
                </section>
                <section style={custonSection}>
                    <input
                        style={custonInput}
                        type="email"
                        placeholder="Digite seu email"
                        {...register("email")}
                    />
                    <span style={custonSpan}>{errors.email?.message}</span>
                </section>
                <section style={custonSection}>
                    <input
                        style={custonInput}
                        type="text"
                        placeholder="Telefone do contato"
                        {...register("phone")}
                    />
                    <span style={custonSpan}>{errors.phone?.message}</span>
                </section>

                <button
                    style={{
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "var(--color-quarta)",
                        padding: "0 16px",
                        borderRadius: "var(--radius2)",
                        gap: "8px",
                        justifyContent: "center",
                        fontSize: "14px",
                        fontFamily: '"Montserrat", sans-serif',
                    }}
                >
                    Adicionar
                </button>
            </form>
        </Modal>
    );
};
