import styled from "styled-components";

export const StyledDivRegister = styled.div`
    width: 65%;
    height: 100%;
    margin: 0 auto;

    display: flex;

    align-items: center;
    justify-content: center;

    @media (max-width: 1000px) {
        flex-direction: column;

        width: 100%;

        gap: 3%;
        margin-top: 48px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;

        gap: 24px;

        max-height: 100%;
        width: 51%;

        padding: 32px;

        border: 2px solid var(--color-secondary);
        border-radius: 8px;

        @media (max-width: 1000px) {
            width: 95%;
            height: 75%;
            padding: 16px;
        }

        section {
            width: 100%;
            position: relative;

            span {
                font-size: 12px;

                opacity: 0.7;

                width: 100%;
                position: absolute;
                bottom: -15px;
                left: 2%;
            }
        }

        div {
            display: flex;

            width: 100%;

            flex-direction: row;

            justify-content: space-between;
            align-items: center;

            a {
                opacity: 0.7;
            }
        }

        input {
            padding: 12px;
            border-radius: 16px;
            border: 2px solid var(--color-secondary);

            font-size: 14px;

            height: 45px;

            width: 100%;
            font-family: "Montserrat", sans-serif;
        }

        button {
            background: var(--color-primary);

            height: 45px;

            color: white;
            font-size: 18px;

            border-radius: 16px;

            font-family: "Montserrat", sans-serif;
        }
    }
`;
