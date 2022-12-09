import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import { Buttons } from '../Article/index.styled';
import Button from '../Button';
import { ModalStyled, OverlayStyled, CloseIcon, Input, Form, Title } from './index.styled';

interface Props {
    onCloseClick: MouseEventHandler
    value?: string
    onChange?: ChangeEventHandler
    onSubmit?: any
};

const Modal: React.FC<Props> = ({ onCloseClick, value, onChange, onSubmit }: Props) => (
    <>
      <ModalStyled>
        <Form onSubmit={onSubmit}>
          <Title>Edit title</Title>
          <Input type="text" value={value} onChange={onChange}/>
          <Buttons>
            <Button danger onClick={onCloseClick}>Close</Button>
            <Button type={'submit'}>Submit</Button>
          </Buttons>
        </Form>
        <CloseIcon onClick={onCloseClick} />
      </ModalStyled>
      <OverlayStyled onClick={onCloseClick} />
    </>
);

export default Modal
