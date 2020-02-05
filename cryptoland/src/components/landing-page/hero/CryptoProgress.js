import React from "react";
import { connect } from 'react-redux';

import { CryptoProgressContainer } from "../../../styles";

import { ProgressBar, ICOtimer, Button } from "../../../components";

function CryptoProgress(props) {

  return (
    <CryptoProgressContainer>
      <div className="progress-container">
        <div className="purchaseHeader">
          <p>{props.width < 620 ? 'Purchase with:' : 'Purchase CRYPTO with:'}</p>
          <div>
            <img src="/assets/images/USD.png" alt='USD currency logo' />
            <p>USD</p>
          </div>
          <div>
            <img src="/assets/images/BTC.png" alt='BTC currency logo'/>
            <p>BTC</p>
          </div>
          <div>
            <img src="/assets/images/ETH.png" alt='ETH currency logo'/>
            <p>ETH</p>
          </div>
          <div>
            <img src="/assets/images/LTC.png" alt='LTC currency logo'/>
            <p>LTC</p>
          </div>
        </div>

        <h1>ICO ends in</h1>

        <ICOtimer />

        <Button
        onClick={()=>window.open("https://cryptoland.icoadm.in/?referral=<referral>")}
        background="linear-gradient(to right, #6BDFC7 0%, #00EB9A 100%);}"
        width='84%'
        padding='2.5%'
        margin="4% 0 0 0"
        textColor="white"
        fontSize="1.25em"
        fontWeight="900"
        letterSpacing="1.5px"
        text="BUY CRYPTO"
        />

        <ProgressBar />
      </div>
    </CryptoProgressContainer>
  );
}

const mapStateToProps = state => ({
  width: state.width
})

export default connect(mapStateToProps,{})(CryptoProgress)
