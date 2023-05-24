import styled from "styled-components";

export const StyledDivLogin = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1000px) {
        flex-direction: column;

        width: 100%;

        margin-top: 48px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 24px;

        width: 30%;
        //height: 60%;
        padding: 48px 32px;

        border: 2px solid var(--color-secondary);
        border-radius: 8px;

        @media (max-width: 1000px) {
            width: 95%;
            height: 60%;
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

        input {
            width: 100%;

            padding: 12px;
            border-radius: 16px;
            border: 2px solid var(--color-secondary);

            font-size: 14px;

            height: 45px;

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

        a {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            background: var(--color-secondary);

            height: 45px;

            color: var(--color-primary);
            font-size: 18px;
            font-weight: bolder;

            border-radius: 16px;
        }

        p {
            width: 100%;
            margin: 0 auto;

            text-align: center;

            @media (max-width: 1000px) {
                width: 100%;
            }
        }
    }
`;
