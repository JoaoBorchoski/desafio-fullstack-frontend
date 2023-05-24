import React, { useContext, useState } from "react";
import { StyledDivHeader } from "./style";
import { CiLogout } from "react-icons/ci";
import { UserContext } from "../../contexts/user.contexts";

export const Header = () => {
    const { LogOut, user } = useContext(UserContext);
    const [screamSize, setScreamSize] = useState();

    console.log(user);

    document.body.onresize = function () {
        setScreamSize(document.body.clientWidth);
    };

    return (
        <StyledDivHeader>
            <h1>
                <span>Agenda</span> Kenzie
            </h1>
            <div>
                <h3>
                    Olá <span>{user.name}</span>, seja bem vindo!
                </h3>
                <button onClick={() => LogOut()}>
                    <CiLogout size={screamSize > 1000 ? 40 : 30} />
                </button>
            </div>
        </StyledDivHeader>
    );
};
