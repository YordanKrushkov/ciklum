import React, { MouseEventHandler } from 'react';
import {StyledButton} from './index.styled';

interface IButton {
  type?: "button" | "submit" | "reset" | undefined
  children: string
  onClick?: MouseEventHandler
  disabled?: boolean
  danger?: boolean
};

const Button:React.FC<IButton> = ({ type ='button', children, onClick, disabled, danger=false }) => {

  return (
    <StyledButton danger={danger} disabled={disabled} type={type} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
