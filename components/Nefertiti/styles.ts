import styled from 'styled-components';

const Container = styled.div`
  display: flex;  // Set to flex
  width: 100%;    // Take up full width of its parent
  height: 100%;   // Take up full height of its parent
`;

const BodyModel = styled.div`
  flex: 1;        // Take up available space
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