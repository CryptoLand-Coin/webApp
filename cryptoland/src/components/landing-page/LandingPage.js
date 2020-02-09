import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import {
  EmailSubscriber,
  HeroDescription,
  CryptoProgress,
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
} from '../../components'

import { LandingPageHero } from '../../styles'

class LandingPage extends Component {

  componentDidMount() {
    window.scroll({ top: 0, behavior: 'smooth' })
  }

  render() {
    return(
      <>
        <LandingPageHero id='hero'>
          <div className='hero-container'>
            <HeroDescription />
            <CryptoProgress />
          </div>
        </LandingPageHero>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <EmailSubscriber push={this.props.history.push} />
      </>
    )
  }

}

export default connect(
  null,
  { }
)(withRouter(LandingPage))
