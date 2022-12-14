import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background: ${(props) => props.theme.colors["base-background"]};
        color: ${(props) => props.theme.colors["base-text"]};
    }

    body, input, textarea, button {
        font-family: ${(props) => props.theme.fonts.regular};
        font-size: ${(props) => props.theme.textSizes["text-regular-m"]};

    }

    a {
        text-decoration: none;
    }
    
    bottom: {
        cursor: pointer;
    }


`;
