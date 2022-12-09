import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  height: 300px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 3px;
  box-shadow: 0 0 7px 1px rgba(0,0,0,.3);
`;

export const Image = styled.div`
  height: 180px;
  width: 100%;
  
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 3px;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover{
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px auto 0;
`;
