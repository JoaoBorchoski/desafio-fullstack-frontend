import React, { useContext, useState } from "react";
import { Header } from "../../components/header";
import { StyledDivHome } from "./style";
import { RiAddLine } from "react-icons/ri";
import { UserContext } from "../../contexts/user.contexts";
import Modal from "react-modal";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchemaContact } from "../../components/schemas";
import { BiTrash } from "react-icons/bi";
import { GrEdit } from "react-icons/gr";

export const Home = () => {
    const {
        contacts,
        modalIsOpen,
        setIsOpen,
        onSubmitContact,
        onDeleteContact,
    } = useContext(UserContext);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const contactLi = (element, index) => {
        const mail = `mailto:${element.email}`;

        return (
            <li key={index}>
                <h3>{element.name}</h3>
                <section>
                    <p>Email: {element.email}</p>
                    <p>Telefone: {element.phone}</p>
                </section>
                <div>
                    <a href={mail}>
                        <AiOutlineMail size={20} />
                    </a>
                    <button>
                        <GrEdit size={20} />
                    </button>
                    <button onClick={() => onDeleteContact(element.id)}>
                        <BiTrash size={20} color="red" />
                    </button>
                </div>
            </li>
        );
    };

    const ModalAddContact = () => {
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
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignContent: "center",
                    }}
                >
                    <h2>Adicionar contato</h2>
                    <button onClick={closeModal}>
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

    return (
        <>
            <Header />
            <StyledDivHome>
                <div>
                    <h2>Contatos</h2>
                    <button onClick={openModal}>
                        <p>Adicionar contato</p>
                        <RiAddLine size={40} />
                    </button>
                </div>
                <ul>
                    {contacts.length > 0 ? (
                        contacts.map((element) =>
                            contactLi(element, element.id)
                        )
                    ) : (
                        <p>Sem contatos adicionados ainda.</p>
                    )}
                </ul>
                <ModalAddContact />
            </StyledDivHome>
        </>
    );
};
