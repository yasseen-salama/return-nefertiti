import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  color: #fff;
  text-align: center;
  background-position: center;
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

const BodyModel = styled.div`
  position: absolute;
  inset: 0;
  cursor: pointer;
  background-color: transparent;
`;
const LoaderContainer = styled.div`
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;  // ensure it's on top
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
  @media screen and (max-width: 767px) {
    padding-bottom: 90px;  
  }
  
`;

export { Container, Header, BodyModel, Footer, LoaderContainer};