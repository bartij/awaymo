import styled from 'styled-components'

import { colors } from '../../constants'
import Wrapper from "../Wrapper";

const HeaderWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid ${colors.white};
`;

export default HeaderWrapper
