import styled from 'styled-components';
import { LoadingAnimation } from '../atoms/animations';

export const Loading = styled.div`
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  color: #ffffff;
  font-size: 20px;
  margin: 100px auto;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation: ${LoadingAnimation} 0.4s infinite linear;
`;
