import styled from 'styled-components';
import { HEADER_FONT_COLOR, HEADER_FONT_SIZE } from './utils/Global';

const Title = styled.div`
  font-size: ${HEADER_FONT_SIZE};
  color: ${HEADER_FONT_COLOR};
  user-select: none;
`;

export default Title;
