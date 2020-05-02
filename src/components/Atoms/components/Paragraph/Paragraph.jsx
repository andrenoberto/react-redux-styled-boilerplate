import styled from 'styled-components';

import { textBase, textDefaults, textProps } from 'styles/mixins';

const Paragraph = styled.p`
  ${textBase};
`;

Paragraph.defaultProps = textDefaults;
Paragraph.propTypes = textProps;

export default Paragraph;