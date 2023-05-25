import styled from "styled-components";

export const StyledDivHome = styled.div`
    margin: 0px 256px;
    margin-top: 64px;

    height: 80vh;

    border: 2px solid var(--color-terciary);
    border-radius: var(--radius1);

    @media (max-width: 1000px) {
        flex-direction: column;
        width: 100%;
        margin: 0;
        border: none;

        > :nth-child(1) {
            height: 60px !important;
        }

        > :nth-child(2) {
            padding: 12px !important;
        }
    }

    > :nth-child(1) {
        border-bottom: 2px solid var(--color-terciary);
        width: 100%;
        height: 80px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 24px;

        @media (max-width: 1000px) {
            padding: 0 12px;

            button {
                height: 35px !important;

                svg {
                    display: none;
                }
            }
        }

        button {
            height: 70%;
            display: flex;
            align-items: center;
            background-color: var(--color-quarta);
            padding: 0 16px;
            border-radius: var(--radius1);
            gap: 8px;
            transition: all 0.5s;
        }
        button:hover {
            scale: 1.1;
        }
    }
    > :nth-child(2) {
        padding: 24px;
        display: flex;

        width: 100%;

        gap: 16px;

        flex-wrap: wrap;
        li {
            display: flex;
            flex-direction: column;

            border: 2px solid var(--color-terciary);
            border-radius: var(--radius1);
            padding: 16px;

            width: 24%;
            height: 20%;

            max-width: 100%;
            min-width: 200px;

            gap: 8px;

            transition: all 0.5s;

            @media (max-width: 1000px) {
                width: 100%;
            }

            div {
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                margin-top: 0.5rem;

                button {
                    transition: all 0.5s;
                }
                button:hover {
                    scale: 1.2;
                }
                a {
                    transition: all 0.5s;
                }
                a:hover {
                    scale: 1.1;
                }
            }
        }

        li:hover {
            border: 2px solid var(--color-quarta);
        }

        > p {
            padding-top: 30px;
            width: 100%;
            text-align: center;
            font-size: 20px;
        }
    }
`;
