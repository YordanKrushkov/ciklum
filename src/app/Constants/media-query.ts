import { css } from 'styled-components';

export const mobile: any = (props: any) => {
  return css`
    @media only screen and (max-width: 480px ) {
      ${props}
    }
  `;
};
export const tablet: any = (props: any) => {
  return css`
    @media only screen and (max-width: 800px) {
      ${props}
    }
  `;
};
export const laptop: any = (props: any) => {
  return css`
    @media only screen and (max-width: 1024px) {
      ${props}
    }
  `;
};
export const desktop: any = (props: any) => {
  return css`
    @media only screen and (max-width: 1200px) {
      ${props}
    }
  `;
};
export const laptopLarge: any = (props: any) => {
  return css`
    @media only screen and (min-width: 1201px) {
      ${props}
    }
  `;
};