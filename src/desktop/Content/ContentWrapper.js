import styled from 'styled-components'
import Wrapper from "../Wrapper";
import {FOOTER_HEIGHT} from "../Footer/FooterWrapper";

const ContentWrapper = styled(Wrapper)`
  display: flex;  
  height: calc(100% - ${FOOTER_HEIGHT}px);
`

export default ContentWrapper
