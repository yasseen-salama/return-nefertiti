import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'BerlinType';
    src: url('/BerlinType-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
`;

export default GlobalStyle;