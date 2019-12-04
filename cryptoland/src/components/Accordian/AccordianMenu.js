import React, { Component } from 'react'
import { AcordianBarContainer } from '../../styles'

export default class extends Component {
  state = {
    chevronSize: ''
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
  render() {
    return(
        <AcordianBarContainer onClick={this.props.clickHandler} color={this.props.color}>
            <div>
                <p>{this.props.text}</p>
                {this.props.isShowing ? <i className={`fas fa-chevron-up ${this.state.chevronSize}`} /> : <i className={`fas fa-chevron-down ${this.state.chevronSize}`} />}
            </div>
        </AcordianBarContainer>
    )
  }
}
