"use client"
import { createGlobalStyle, styled } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'BerlinType';
    src: url('/BerlinType-Regular.otf') format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  h1 {
    font-family: 'BerlinType';
    font-size: 1.2rem;
    color: red;
    padding: 25px 50px 75px 100px;
  }
`;

const Header = styled.div`
  font-size: 1.3rem;
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