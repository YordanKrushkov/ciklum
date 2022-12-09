import styled from 'styled-components';
import { IoMdClose } from 'react-icons/io';
import { mobile } from '../../app/Constants/media-query';

const OverlayStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 998;
    background: black;
    opacity: 0.5;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    filter: blur(5px);
`;

const ModalStyled = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    max-height: 90%;
    background: white;
    z-index: 999;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 4px 1px #5ca9d5;
    overflow-y: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      background: transparent;
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background: #5ca9d5;
      border-radius: 10px;
    }

 ${mobile({ width: '80%'})}

`;

const CloseIcon = styled(IoMdClose)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  &:hover {
    cursor: pointer;
  }
`;

const Form = styled.form`
  padding: 10px;
`;

const Title = styled.h1`
  text-align: center;
  text-transform: capitalize;
 ${mobile({ fontSize: '24px'})}

`;

const Input = styled.input`
  font-size: 18px;
  margin: 20px auto;
  width: 100%;
  border: 1px solid grey;
  padding: 10px 20px;
  box-sizing: border-box;
  outline: none;
  border-radius: 5px;
 ${mobile({ fontSize: '12px'})}

  &:hover {
    cursor: pointer;
  }
`;

export { ModalStyled, OverlayStyled, CloseIcon,Form, Input, Title };