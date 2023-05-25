import React, { useContext } from "react";
import { Header } from "../../components/header";
import { StyledDivHome } from "./style";
import { RiAddLine } from "react-icons/ri";
import { UserContext } from "../../contexts/user.contexts";

export const Home = () => {
    const { contacts } = useContext(UserContext);

    const contactLi = (element, index) => {
        return (
            <li key={index}>
                <h2>{element.name}</h2>
                <section>
                    <p>Email: {element.email}</p>
                    <p>Telefone: {element.phone}</p>
                </section>
            </li>
        );
    };

    return (
        <>
            <Header />
            <StyledDivHome>
                <div>
                    <h2>Contatos</h2>
                    <button>
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
        </>
    );
};
