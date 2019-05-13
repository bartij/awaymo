import styled from 'styled-components'
import { colors } from "../../constants";

const StyledListItem = styled.li`
  &:not(:last-child) {
    border-bottom: 1.5px solid ${colors.redSecond};
  }
  width: 100%;
  display: flex;
`

export default StyledListItem
