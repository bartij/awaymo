import styled from 'styled-components'

import { colors } from '../constants'

export const APP_PADDING = 16;

const AppWrapper = styled.div`
  background-color: ${colors.red};
  padding: 0 ${APP_PADDING}px;
  color: ${colors.white};
  min-height: 100vh;
  position: relative;
`;

export default AppWrapper
