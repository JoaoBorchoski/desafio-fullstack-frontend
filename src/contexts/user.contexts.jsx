import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Api } from "../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState();
    const [user, setUser] = useState();
    const navigate = useNavigate();

    const onSubmitLogin = async (data) => {
        try {
            const response = await Api.post("/login", data);

            setToken(response.data.token);
            delete response.data.token;
            setUser(response.data);

            localStorage.setItem("@token", token);

            toast.success("Usuario Logado");

            setTimeout(() => navigate("/home"), 1500);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

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

    const LogOut = () => {
        localStorage.removeItem("@token");
        setUser(null);
        navigate("/");
    };

    return (
        <UserContext.Provider
            value={{ onSubmitLogin, onSubmitRegister, LogOut, user }}
        >
            {children}
        </UserContext.Provider>
    );
};
