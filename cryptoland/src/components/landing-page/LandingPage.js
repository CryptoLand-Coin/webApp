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

import { confirmLPLoaded } from '../../store/actions'

class LandingPage extends Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    this.setState({
      loaded: true
    }, () => this.props.confirmLPLoaded(this.state.loaded))
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
  { confirmLPLoaded }
)(withRouter(LandingPage))
