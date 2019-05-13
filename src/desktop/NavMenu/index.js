import React from 'react'
import { Link } from 'react-router-dom'
import { Transition } from "react-transition-group"

import StyledList from './StyledList'
import StyledListItem from './StyledListItem'

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
}

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
    }
  }

  componentDidMount() {
    this.setState({
      animate: true,
    })
  }

  render() {
    const { links } = this.props;
    const { animate } = this.state;

    return (
      <Transition in={animate} timeout={400}>
        {status => <StyledList style={{...transitionStyles[status]}}>
          {
            links.map(link => <StyledListItem>
              <Link to={link.path}>{link.text}</Link>
            </StyledListItem>)
          }
        </StyledList>
        }
      </Transition>
    )
  }
}

export default NavMenu
