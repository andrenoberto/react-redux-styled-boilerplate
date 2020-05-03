import PropTypes from 'prop-types';
import { css } from 'styled-components';

import { darkTheme } from 'styles/themes';

export const textBase = css`
  color: ${props => props.theme.color.default};
`;
export const textDefaults = {
  theme: {
    color: darkTheme.color,
  },
};
export const textProps = {
  theme: PropTypes.object,
};
