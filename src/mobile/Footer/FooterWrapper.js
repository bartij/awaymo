import styled from 'styled-components'

import Wrapper from '../Wrapper';
import { colors } from '../../constants';
import { APP_PADDING } from '../../common/AppWrapper';

export const FOOTER_HEIGHT = 200;

const FooterWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1.5px solid ${colors.redSecond};
  height: ${FOOTER_HEIGHT}px;
  padding-top: 40px;
  font-size: 20px;
  font-weight: 500;
  width: 100%;
`;

export default FooterWrapper
