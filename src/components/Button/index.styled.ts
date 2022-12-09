import styled from 'styled-components';

interface Props {
  danger: boolean
};

export const StyledButton = styled.button<Props>`
  min-width: 100px;
  padding: 10px 20px;
  color: ${({danger})=> danger && 'white'};
  background-color: ${({danger})=> danger && '#D55C5C'};
  border-radius: 3px;
  border: none;
  box-shadow: 0 0 7px 1px rgba(0,0,0,.3);
  &:hover{
    cursor: pointer;
    box-shadow: 0 0 7.2px 1.5px rgba(0,0,0,.3);
  }
  &:disabled{
    cursor: unset;
    box-shadow: 0 0 7px 1px rgba(0,0,0,.3);
  }
`;
