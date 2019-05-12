import React from 'react'
import logo from '../../assets/awaymoFullWhite.svg'

import StyledLogo from './StyledLogo'
import StyledCloseIcon from './StyledCloseIcon'

import HeaderWrapper from './HeaderWrapper'

const Header = () =>
  <HeaderWrapper>
    <StyledLogo src={logo} alt='' />
    <StyledCloseIcon icon="times" />
  </HeaderWrapper>

export default Header
