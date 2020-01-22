import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import {
  AccordianSectionContainer,
  AccordianTextContainer,
  AcordianBarContainer
} from '../../styles'

class AcordianMenu extends Component {
  state = {
    chevronSize: '',
    isShowing: false
  }

  componentDidMount() {
    if(window.innerWidth < 600) {
      this.setState({
        chevronSize: 'fa-1x'
      })
    } else {
      this.setState({
        chevronSize: 'fa-2x'
      })
    }
  }

  clickHandler = () => {
    this.setState({ isShowing: !this.state.isShowing });
  };

  render() {
    const hashLocation = this.props.history.location.hash
    const lowerText = this.props.text.toLowerCase()
    const splitTextArr = lowerText.split(' ')
    const joinText = splitTextArr.join('')

    return(
      <AccordianSectionContainer id={`${joinText}`}>

        <AcordianBarContainer
          onClick={this.clickHandler}
          color={this.props.color}
          isShowing={this.state.isShowing || hashLocation.includes(joinText)}
        >
            <div>
                <p>{this.props.text}</p>
                <i className={`fas fa-chevron-up ${this.state.chevronSize}`} /> 
            </div>
        </AcordianBarContainer>

        {this.state.isShowing || hashLocation.includes(joinText) ? (
          <AccordianTextContainer>
            {this.props.children}
          </AccordianTextContainer>
          ) : null
        }

      </AccordianSectionContainer>

    )
  }
}

export default withRouter(AcordianMenu)
