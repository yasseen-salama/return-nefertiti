import { createGlobalStyle, styled } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'BerlinType';
    src: url('/BerlinType-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
`;

const Header = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1.3rem;

  @media (max-width: 480px) {
    font-size: 1.3rem;
  }

  h1 {
    font-size: inherit;
  }
  span {
    font-family: 'BerlinType';
    background: red;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const Footer = styled.div`
  position: absolute;
  bottom: 1rem;
  z-index: 9;
  font-size: 0.8rem;
  width: 100%;
  font-family: 'BerlinType';
  background: red;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
`;

export  {GlobalStyle, Header, Footer};