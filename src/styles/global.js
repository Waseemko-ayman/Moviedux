import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  html,
  body {
    height: 100%;
  }

  body {
    color: #fff;
    background-color: #121212;
  }

  #root {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  input,
  textarea {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style-type: none;
  }
`;

export default GlobalStyle;