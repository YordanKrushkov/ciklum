import styled from "styled-components";
import { desktop, laptop, mobile } from "../../app/Constants/media-query";

export const PageTitle = styled.h1`
  text-align: center;
  font-size: 36px;
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  flex-wrap: wrap;
  gap: 20px;
  width: 80%;
  margin: 40px auto;
  ${desktop({ width: '100%', justifyItems: 'center'})};
  ${laptop({ width: '100%', justifyItems: 'center'})};
  ${mobile({ width: '100%', justifyItems: 'center'})};
`;
export const Buttons = styled.div`
  display: flex;
  gap: 20px;
  width: 80%;
  justify-content: center;
  margin: 0 auto 20px
`;