import styled from "styled-components";

export const StyledDivHome = styled.div`
    margin: 0px 256px;
    margin-top: 64px;

    height: 80vh;

    border: 2px solid var(--color-terciary);
    border-radius: var(--radius1);

    > :nth-child(1) {
        border-bottom: 2px solid var(--color-terciary);
        width: 100%;
        height: 80px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 24px;

        button {
            height: 70%;
            display: flex;
            align-items: center;
            background-color: var(--color-quarta);
            padding: 0 16px;
            border-radius: var(--radius1);
            gap: 8px;
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

            gap: 8px;
        }

        > p {
            padding-top: 30px;
            width: 100%;
            text-align: center;
            font-size: 20px;
        }
    }
`;
