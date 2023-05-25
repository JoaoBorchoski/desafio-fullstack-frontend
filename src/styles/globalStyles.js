import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }
   
    @media (max-width: 1100px) {
        html, body {
    overflow-x: hidden;
    }
    
    }
    ::-webkit-scrollbar {
        display: none;
    }

    h1, h2, h3, h4, h5, h6, span, a, li, button, input, p, select, label {
        font-family: 'Montserrat', sans-serif;
        margin:0;
    }

    button {
        cursor: pointer;
        border: none;
        background: transparent;
    }

    a {
        text-decoration: none;
        color: unset;
    }

    body li {
        list-style: none;
    }

    input:focus,
    select:focus,
    textarea:focus {
        outline: 0;
    }

    :root{
    --gray6: #1A1B1F;
    --gray5: #21232B;
    --gray4: #373943;
    --gray3: #50515E;
    --gray2: #6B6C7A;
    --gray1: #A9AAB2;

    --fixed-white: #FFFFFF;

    --color-primary: #0A2647;
    --color-secondary: #9DB2BF;
    --color-terciary: #3B6978;
    --color-quarta: #AFD3E2;

    --color-red: #cc2222;


    --font1: 3rem;          // 48px
    --font2: 2rem;          // 32 px
    --font3: 1.5rem;        // 24px
    --font4: 1.125rem;      //18px
    --font5: 1rem;          // 16px              
    --font6: .75rem;        //12px

    --radius1: .5rem;    //8px
    --radius2: 1rem;    //16px
  }
`;
