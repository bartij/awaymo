import styled from 'styled-components'

import Wrapper from '../Wrapper';
import {colors} from '../../constants';
import { APP_PADDING } from '../../common/AppWrapper';

export const FOOTER_HEIGHT = '140';

const FooterWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${colors.redSecond};
  height: ${FOOTER_HEIGHT}px;
  padding-top: 16px;
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  width: calc(100% - 2 * ${APP_PADDING}px);
  bottom: 0;
`;

export default FooterWrapper
