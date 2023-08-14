import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 100vw;
  color: #fff;
  text-align: center;
  background-position: center;
  @media (max-width: 768px) {
    min-height: -webkit-fill-available; /* fix for mobile Safari and similar viewport environments */
  }
  @media (min-width: 769px) {
    height: 100vh;
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

export { Container, BodyModel, LoaderContainer};