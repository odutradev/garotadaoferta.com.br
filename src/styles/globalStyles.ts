import { createGlobalStyle } from 'styled-components'

import { colors } from './tokens'

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Nunito', 'Segoe UI', sans-serif;
    background-color: ${colors.primaryBg};
    color: ${colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    font-family: inherit;
    border: none;
    background: none;
  }

  img, svg {
    display: block;
  }
`

export default GlobalStyles
