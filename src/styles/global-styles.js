import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
        color: #282A3A;
        font-weight: 500;

    }

    body {
        background-color: #282A3A;
    }
`;

export default GlobalStyles;