import React from 'react'

import ContentWrapper from './ContentWrapper';
import NavMenu from '../NavMenu';
import LeftMenuWrapper from './LeftMenuWrapper';
import RightMenuWrapper from './RightMenuWrapper';
import CenterSectionWrapper  from './CenterSectionWrapper';
import ProfileInfo from '../ProfileInfo';

const LEFT_TOP_LINKS = [{ text: 'Home', path: '/somepath' }, { text: 'Flights', path: '/somepath' }];
const LEFT_BOTTOM_LINKS = [
  { text: 'About us', path: '/somepath' },
  { text: 'FAQ', path: '/somepath' },
  { text: 'Support', path: '/somepath' },
  { text: 'Contact Us', path: '/somepath' }
];
const RIGHT_LINKS = [
  { text: 'Profile', path: '/somepath' },
  { text: 'My Bookings', path: '/somepath' },
  { text: 'My Payments', path: '/somepath' },
  { text: 'Log Out', path: '/somepath' },
  { text: 'Resume Application', path: '/somepath' }
];

const Content = () =>
  <ContentWrapper>
    <LeftMenuWrapper>
      <NavMenu links={LEFT_TOP_LINKS} />
      <NavMenu links={LEFT_BOTTOM_LINKS} />
    </LeftMenuWrapper>
    <CenterSectionWrapper>
      <ProfileInfo />
      <RightMenuWrapper>
        <NavMenu links={RIGHT_LINKS} />
      </RightMenuWrapper>
    </CenterSectionWrapper>
  </ContentWrapper>

export default Content
