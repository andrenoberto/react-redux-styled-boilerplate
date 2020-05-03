import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${props => props.theme.font.family.default};
    -webkit-font-smoothing: ${props => props.theme.font.smoothing.default};
    -moz-osx-font-smoothing: ${props => props.theme.font.smoothing.osx};
  }

  code {
    font-family: ${props => props.theme.font.family.code};
  }
`;

export default GlobalStyle;
