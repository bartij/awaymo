import styled from 'styled-components'
import {colors} from "../../constants";

const AvatarBackground = styled.div`
  border-radius: 50%;
  width: 64px;
  height: 64px;
  background: ${colors.white};
  padding: 4px;
  box-sizing: border-box;
  margin-right: 20px;
`;

export default AvatarBackground
