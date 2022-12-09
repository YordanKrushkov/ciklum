import styled, { keyframes } from 'styled-components';

const breatheAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  position: fixed;
  z-index: 998;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: max-content;
  height: max-content;
`;

const Spinner = styled.div` 
  position: relative;
  z-index: 999;
  display: flex;
  width: 80px;
  height: 80px;
    div{
      position: absolute;
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      box-sizing: border-box;
      animation: ${breatheAnimation} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border: 8px solid grey;
      border-radius: 50%;
      border-color: grey transparent transparent transparent;
      &:nth-child(1){
        animation-delay: -0.45s;
      }
      &:nth-child(2){
        animation-delay: -0.3s;
      }
      &:nth-child(3){
        animation-delay: -0.15s;
      }
    }
`;

export { Container, Spinner };