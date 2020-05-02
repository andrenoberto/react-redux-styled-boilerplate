import PropTypes from 'prop-types';
import styled from 'styled-components';

import { lightTheme } from 'styles/themes';

const Header = styled.header`
  align-items: center;
  background-color: ${props => props.theme.background.color};
  color: ${props => props.theme.color.default};
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: 100vh;
`;

Header.defaultProps = {
  theme: {
    background: lightTheme.background,
    color: lightTheme.color,
  }
};
Header.propTypes = {
  theme: PropTypes.object,
};

export default Header;