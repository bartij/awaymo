import React from 'react'

import avatar from '../../../assets/avatar.png';
import ProfileWrapper from './ProfileWrapper';
import LogoBackground from './LogoBackground';
import Paragraph from './Paragraph';
import BalanceWrapper from './BalanceWrapper';

const ProfileInfo = () => (
  <ProfileWrapper>
    <LogoBackground>
      <img src={avatar} alt='' height="55" width="55" />
    </LogoBackground>
    <BalanceWrapper>
      <Paragraph fontSize={26}>Dominik</Paragraph>
      <Paragraph fontSize={24}>Available Balance</Paragraph>
      <Paragraph fontSize={24}>£1,500.00</Paragraph>
    </BalanceWrapper>
  </ProfileWrapper>
)

export default ProfileInfo
