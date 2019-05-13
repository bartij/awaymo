import styled from 'styled-components'
import Wrapper, { WRAPPER_PADDING } from "../Wrapper";
import { FOOTER_HEIGHT } from "../Footer/FooterWrapper";
import { LOGO_HEIGHT } from "../Header/StyledLogo";

const HEADER_HEIGHT = WRAPPER_PADDING*2 + LOGO_HEIGHT;

const ContentWrapper = styled(Wrapper)`
  display: flex;  
  min-height: calc(100vh - ${FOOTER_HEIGHT + HEADER_HEIGHT}px);
`

export default ContentWrapper
