import React from 'react'
import AvatarBackground from '../Content/AvatarBackground';
import AvatarWrapper from '../Content/AvatarWrapper';
import avatar from '../../assets/avatar.png';
import ProfileWrapper from '../Content/ProfileWrapper';

const ProfileInfo = () => (
  <ProfileWrapper>
    <AvatarBackground>
      <AvatarWrapper>
        <img src={avatar} alt='' height='30' />
      </AvatarWrapper>
    </AvatarBackground>
    <div>
      <p>Dominik Biel</p>
      <p>£1,500.00 Available</p>
    </div>
  </ProfileWrapper>
)

export default ProfileInfo
