import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ContentWrapper from './ContentWrapper';
import StyledLink from './StyledLink';
import StyledText from './StyledText';
import StyledListItem from './StyledListItem';
import StyledList from './StyledList';
import ProfileInfo from "./ProfileInfo";

const LINKS = [
  { text: 'Profile', path: '/somepath', icon: 'user-circle' },
  { text: 'My Bookings', path: '/somepath', icon: 'plane' },
  { text: 'My Payments', path: '/somepath', icon: 'credit-card' },
  { text: 'Support', path: '/somepath', icon: 'life-ring' },
  { text: 'Contact Us', path: '/somepath', icon: 'phone' },
  { text: 'Log Out', path: '/somepath', icon: 'sign-out-alt' },
  { text: 'About', path: '/somepath', icon: 'question-circle' },
  { text: 'FAQ', path: '/somepath', icon: 'info-circle' },
];

const Content = () =>
  <ContentWrapper>
    <ProfileInfo />
    <StyledList>
      {
        LINKS.map(link =>
          <StyledListItem key={link.text}>
            <StyledLink to={link.path}>
              <FontAwesomeIcon icon={link.icon} />
              <StyledText>{link.text}</StyledText>
            </StyledLink>
          </StyledListItem>)
      }
    </StyledList>
  </ContentWrapper>

export default Content
