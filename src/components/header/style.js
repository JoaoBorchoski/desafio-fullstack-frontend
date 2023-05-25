import styled from "styled-components";

export const StyledDivHeader = styled.div`
    width: 100%;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0px 256px;

    box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
        rgba(17, 17, 26, 0.05) 0px 8px 32px;

    @media (max-width: 1200px) {
        padding: 0 12px;

        justify-content: space-evenly;
        width: 100%;
        flex-direction: column;
        height: 100px;

        div {
            font-size: 90%;
        }
    }

    div {
        display: flex;
        align-items: center;
        gap: 32px;

        span {
            color: var(--color-terciary);
        }

        button {
            transition: all 0.5s;
        }
        button:hover {
            scale: 1.2;
        }
    }

    h1 {
        margin: 0;

        span {
            color: var(--color-terciary);
        }
    }
`;
