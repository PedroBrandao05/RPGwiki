import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


* {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
        font-family: 'Merriweather';
        color: white;
    }
    html {
        font-size: 62.5%;
    }
    body {
        background-color: #18171C;
        overflow-x: hidden;
        scroll-behavior: auto;
        ::-webkit-scrollbar {
            background: black;
            width: 1rem;
        }
        ::-webkit-scrollbar-thumb {
            border-radius: 12px;
            background: white;
        }
    }
    @media (max-width: 768px) {
        html {
            font-size: 50%;
        }
    }
    @media (max-width: 625px) {
        html {
            font-size: 40%;
        }
    }
    @media (max-width: 485px) {
        html {
            font-size: 35%;
        }
    }
    @media (max-width: 425px) {
        html {
            font-size: 30%;
        }
    }
`