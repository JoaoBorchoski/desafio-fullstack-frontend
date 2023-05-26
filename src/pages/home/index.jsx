import React, { useContext } from "react";
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
import { AddContact, ModalAddContact } from "../../components/modal";

export const Home = () => {
    const { contacts, modalIsOpen, setIsOpen, onDeleteContact } =
        useContext(UserContext);

    Modal.setAppElement("#root");

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

    return (
        <>
            <Header />
            <StyledDivHome>
                <div>
                    <h2>Contatos</h2>
                    <button onClick={() => setIsOpen(!modalIsOpen)}>
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
            </StyledDivHome>
            {modalIsOpen === true ? <AddContact /> : null}
            {/* {modalIsOpen === true ? <ModalAddContact /> : null} */}
        </>
    );
};
