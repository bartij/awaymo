import styled from 'styled-components'
import {colors} from "../../constants";

const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.red};
  border-radius: 50%;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export default AvatarWrapper
