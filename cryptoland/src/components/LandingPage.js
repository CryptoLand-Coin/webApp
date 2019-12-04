import React from 'react'
import { withRouter } from 'react-router-dom'
import { LandingPageHero, BuyCryptoButton } from '../styles'
import AboutCrypto from './AboutCrypto'
import WhitePaper from './WhitePaper'
import RoadMap from './RoadMap'
import EmailSubscriber from './EmailSubscriber'

function LandingPage(props) {
    return(
        <>
            <LandingPageHero>
    
                <img src='/assets/CryptoLand_Logo_White.png' />
    
                <h1>The Cryptocurrency you can spend</h1>
                <p>A new pure digital currency that you can use.</p>
    
                <BuyCryptoButton>
                    <p>BUY CRYPTO</p>
                </BuyCryptoButton>
                
            </LandingPageHero>
            <AboutCrypto />
            <WhitePaper />
            <RoadMap />
            <EmailSubscriber push={props.history.push} />
        </>
    )
}

export default withRouter(LandingPage)