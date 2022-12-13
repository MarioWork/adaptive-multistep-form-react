import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        height: 100vh;
        background-color: #282A3A;
        padding-top: 5em;
    }
`;

export default GlobalStyles;