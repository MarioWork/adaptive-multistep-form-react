import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Roboto", sans-serif;
        color: #282A3A;
        font-weight: 500;

    }

    body {
        height: 100vh;
        background-color: #282A3A;
        padding-top: 5em;
    }
`;

export default GlobalStyles;