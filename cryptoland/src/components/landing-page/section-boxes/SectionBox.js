import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

// import {
//
// } from '../../styles'

import {
  Button
} from '../../../components'

class SectionBox extends Component {

  render() {

    return(
      <div
        backgroundImage={this.props.backgroundImage}
        align={this.props.align}
      >
        <div className='box-title'>
          <h1>{this.props.title}</h1>
          <p>{this.props.subTitle}</p>
        </div>

        <div className='box-body'>
          {this.props.children}
        </div>

        <div>
          <Button
            buttonColor={this.props.buttonColor}
          >
            <a href='https://cryptoland.icoadm.in/?referral=<referral>' >{this.props.give ? 'GIVE' : 'BUY'}</a>
          </Button>
          <Button
            buttonColor={this.props.buttonColor}
          >
            <Link to={`/${this.props.buttonLink}`} >{this.props.buttonName}</Link>
          </Button>
        </div>
      </div>

    )
  }
}

export default withRouter(SectionBox)
