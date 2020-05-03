import styled, { css } from 'styled-components';

import { imageProps } from 'styles/mixins';

const Image = styled.img`
  pointer-events: none;
`;

Image.propTypes = imageProps;

export const LogoImage = styled(Image).attrs(props => ({
  animation: props.animation
    ? css`
        ${props.animation} infinite 20s linear
      `
    : 'none',
}))`
  animation: ${props => props.animation};
  height: 40vmin;
`;

export default Image;
