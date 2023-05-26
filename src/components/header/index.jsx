import React, { useContext, useEffect } from "react";
import { StyledDivHeader } from "./style";
import { CiLogout } from "react-icons/ci";
import { UserContext } from "../../contexts/user.contexts";

export const Header = () => {
    const { LogOut, user, getUser, obs } = useContext(UserContext);

    useEffect(() => {
        getUser();
    }, [obs]);

    return (
        <StyledDivHeader>
            <h1>
                <span>Agenda</span> Kenzie
            </h1>
            <div>
                {user && (
                    <h3>
                        Olá <span>{user.name}</span>, seja bem vindo!
                    </h3>
                )}
                <button onClick={() => LogOut()}>
                    <CiLogout size={40} />
                </button>
            </div>
        </StyledDivHeader>
    );
};
