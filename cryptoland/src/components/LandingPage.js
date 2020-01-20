import React from 'react'
import { withRouter } from 'react-router-dom'
import { LandingPageHero } from '../styles'
import AboutCrypto from './AboutCrypto'
import WhitePaper from './WhitePaper'
import RoadMap from './RoadMap'
import EmailSubscriber from './EmailSubscriber'
import UtilityToken from './UtilityToken'
import TransactionSpeed from './TransactionSpeed'
import CryptolandApplication from './CryptolandApplication'
import HeroDescription from './HeroDescription'
import CryptoProgress from './CryptoProgress'

function LandingPage(props) {
    return(
        <>
            <LandingPageHero id='hero'>
              <div className='hero-container'>
                <HeroDescription />
                <CryptoProgress />
              </div>
            </LandingPageHero>
            <AboutCrypto />
            {/*<WhitePaper />*/}
            <RoadMap />
            <UtilityToken />
            <TransactionSpeed />
            <CryptolandApplication />
            <EmailSubscriber push={props.history.push} />
        </>
    )
}

export default withRouter(LandingPage)
