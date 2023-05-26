import styled from "styled-components";

export const StyledModalDiv = styled.div`
    position: fixed;
    top: 0;
    right: 0;

    display: grid;
    place-items: center;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.2);

    @keyframes modalIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    animation: modalIn 0.2s ease-in;

    div {
        width: 28%;
        height: 32%;

        padding: 16px;

        @media (max-width: 1000px) {
            width: 95%;
            height: 45%;
        }

        section {
            border-top-left-radius: 16px;
            border-top-right-radius: 16px;

            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px;

            background: var(--fixed-white);
        }

        form {
            background: var(--fixed-white);
            height: 100%;

            display: flex;
            flex-direction: column;

            border-bottom-left-radius: 16px;
            border-bottom-right-radius: 16px;

            section {
                width: 100%;
                position: relative;

                input {
                    padding: 8px;
                    border-radius: 16px;
                    border: 2px solid var(--color-secondary);
                    height: 40px;
                    font-size: 14px;
                    font-family: "Montserrat", sans-serif;
                    width: 100%;
                }

                span {
                    font-size: 12px;
                    opacity: 0.7;
                    width: 100%;
                    position: absolute;
                    bottom: -15px;
                    left: 2%;
                }
            }

            button {
                height: 40px;
                display: flex;
                align-items: center;
                background-color: var(--color-quarta);
                border-radius: var(--radius2);
                justify-content: center;
                font-size: 14px;
                font-family: "Montserrat", sans-serif;
                margin: 0 16px;
            }
        }
    }
`;
