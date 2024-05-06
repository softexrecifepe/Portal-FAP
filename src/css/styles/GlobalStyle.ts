import { createGlobalStyle } from "styled-components";
import { softexTheme } from "../themes/softexTheme";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body{
    font-family: 'Roboto', sans-serif;
    background-image: linear-gradient(${softexTheme.gradients.gradient});
    height: 100vh;
  }
`;

export default GlobalStyle;
