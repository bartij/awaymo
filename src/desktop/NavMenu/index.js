import React from 'react'
import { Link } from 'react-router-dom'

import StyledList from './StyledList'
import StyledListItem from './StyledListItem'

const NavMenu = ({ links }) => <StyledList>
  {
    links.map(link => <StyledListItem>
      <Link to={link.path}>{link.text}</Link>
    </StyledListItem>)
  }
</StyledList>

export default NavMenu
