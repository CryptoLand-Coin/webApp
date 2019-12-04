import React from 'react'
import { TickerContainer } from '../styles'

function Ticker() {
    return(
        <TickerContainer>
                <p>Cryptoland (CRYPTO) $0.50 usd</p>
                <i class="fas fa-sort-up fa-2x" /><p>+$0.25 (50.0%)</p>
        </TickerContainer>
    )
}

export default Ticker