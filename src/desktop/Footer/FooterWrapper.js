import styled from 'styled-components'

import Wrapper from '../Wrapper';
import { colors } from '../../constants';

export const FOOTER_HEIGHT = 160;

const FooterWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${colors.redSecond};
  height: ${FOOTER_HEIGHT}px;
  padding-top: 16px;
  font-size: 14px;
  font-weight: 500;
  box-sizing: border-box;
`;

export default FooterWrapper
