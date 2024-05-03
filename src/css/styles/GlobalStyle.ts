import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body{
    font-family: 'Roboto', sans-serif;
    background-color: #f0f0f0;
  }
`;

export default GlobalStyle;
