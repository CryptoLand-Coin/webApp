import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { LandingPageHero } from '../styles'

import { confirmLPLoaded } from '../store/actions'

import AboutCrypto from './AboutCrypto'
import WhitePaper from './WhitePaper'
import RoadMap from './RoadMap'
import EmailSubscriber from './EmailSubscriber'
import UtilityToken from './UtilityToken'
import TransactionSpeed from './TransactionSpeed'
import CryptolandApplication from './CryptolandApplication'
import HeroDescription from './HeroDescription'
import CryptoProgress from './CryptoProgress'

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
        <AboutCrypto />
        <WhitePaper />
        <RoadMap />
        <UtilityToken />
        <TransactionSpeed />
        <CryptolandApplication />
        <EmailSubscriber push={this.props.history.push} />
      </>
    )
  }

}

export default connect(
  null,
  { confirmLPLoaded }
)(withRouter(LandingPage))
