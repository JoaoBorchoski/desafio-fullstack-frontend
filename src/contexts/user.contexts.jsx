import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Api } from "../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState();
    const [user, setUser] = useState();
    const [contacts, setContacts] = useState([]);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [obs, setObs] = useState(1);
    const navigate = useNavigate();

    const onSubmitLogin = async (data) => {
        try {
            const response = await Api.post("/login", data);

            localStorage.setItem("@token", response.data.token);
            localStorage.setItem("@id", response.data.id);

            setToken(response.data.token);
            delete response.data.token;
            setUser(response.data);

            toast.success("Usuario Logado");

            navigate("/home");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    async function getUser() {
        const token = localStorage.getItem("@token");
        const myId = localStorage.getItem("@id");

        if (!token && !myId) {
            console.log("oi");
            return;
        }
        try {
            const response = await Api.get(`/usersDetail/${myId}`);
            setUser(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        async function getContacts() {
            const token = localStorage.getItem("@token");
            const myId = localStorage.getItem("@id");

            if (!token && !myId) {
                return;
            }
            try {
                const response = await Api.get("/contacts", {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                });
                setContacts(response.data);

                const responseUser = await Api.get(`/usersDetail/${myId}`);
                setUser(responseUser.data);
            } catch (error) {
                setContacts("");
                console.log(error);
            }
        }
        getContacts();
    }, [navigate, modalIsOpen, obs]);

    const onSubmitRegister = async (data) => {
        try {
            await Api.post("/users", {
                name: data.name,
                email: data.email,
                password: data.password,
                phone: data.phone,
            });

            toast.success("Usuario criado");

            setTimeout(() => navigate("/"), 1500);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    const onSubmitContact = async (data) => {
        try {
            await Api.post(
                "/contacts",
                {
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                },
                {
                    headers: {
                        authorization: `Bearer ${token}`,
                    },
                }
            );

            toast.success("Usuario criado");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setIsOpen(false);
        }
    };

    const onDeleteContact = async (id) => {
        try {
            await Api.delete(`/contacts/${id}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            });

            toast.success("Contato deletado");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        } finally {
            setObs(obs + 1);
        }
    };

    const LogOut = () => {
        localStorage.removeItem("@token");
        localStorage.removeItem("@id");
        setUser(null);
        navigate("/");
    };

    return (
        <UserContext.Provider
            value={{
                onSubmitLogin,
                onSubmitRegister,
                LogOut,
                user,
                contacts,
                onSubmitContact,
                modalIsOpen,
                setIsOpen,
                onDeleteContact,
                getUser,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
