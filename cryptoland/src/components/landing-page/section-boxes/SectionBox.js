import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { SectionContainer } from '../../../styles'

import {
  Button
} from '../../../components'

class SectionBox extends Component {

  render() {

    return(
      <SectionContainer
        backgroundImage={this.props.backgroundImage}
        textColor={this.props.textColor}
        align={this.props.align}
      >
        <div className='box-container'>
          <div className='box-title'>
            <h1>{this.props.title}</h1>
            <p>{this.props.subTitle}</p>
          </div>

          <div className='box-body'>
            {this.props.children}
          </div>

          <div className='buttons'>
            <Button
              margin='0 10px 0 0'
              padding='10px 50px'
              textColor={this.props.buttonTextColor === 'white' ? 'white' : null}
              textGradient={this.props.buttonTextColor !== 'white' ? true : false}
              background={this.props.buttonColor}
              fontSize='1.2rem'
              fontWeight='700'
              noDecoration
              hoverScale
            >
              <a href='https://cryptoland.icoadm.in/?referral=<referral>' >{this.props.give ? 'GIVE' : 'BUY'}</a>
            </Button>
            <Button
              margin='0 10px 0 0'
              padding='7px 37px'
              textColor={this.props.buttonColor === 'white' ? 'white' : null}
              textGradient={this.props.buttonColor !== 'white' ? true : false}
              buttonColor={this.props.buttonColor}
              border={this.props.buttonColor === 'white' ? `3px solid white` : `3px solid #00eb9a`}
              fontSize='1.2rem'
              fontWeight='900'
              noDecoration
              noBackground
              hoverScale
            >
              <Link to={`/${this.props.buttonLink}`} >{this.props.buttonName}</Link>
            </Button>
          </div>
        </div>
      </SectionContainer>

    )
  }
}

export default withRouter(SectionBox)
