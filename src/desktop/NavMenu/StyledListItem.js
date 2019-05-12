import styled from 'styled-components'

const StyledListItem = styled.li`
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  &:not(last-child) {
    margin-bottom: 20px;
  }
`;

export default StyledListItem
