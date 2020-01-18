import React from "react";
import { connect } from 'react-redux';

import { CryptoProgressContainer } from "../styles";

import ProgressBar from "./ProgressBar";
import ICOtimer from "./ICOtimer";
import Button from "./Buttons/Button";

function CryptoProgess(props) {

  return (
    <CryptoProgressContainer>
      <div className="progress-container">
        <div className="purchaseHeader">
          <p>{props.width < 620 ? 'Purchase with:' : 'Purchase CRYPTO with:'}</p>
          <div>
            <img src="/assets/USD.png" />
            <p>USD</p>
          </div>
          <div>
            <img src="/assets/BTC.png"/>
            <p>BTC</p>
          </div>
          <div>
            <img src="/assets/ETH.png"/>
            <p>ETH</p>
          </div>
          <div>
            <img src="/assets/LTC.png"/>
            <p>LTC</p>
          </div>
        </div>

        <h1>ICO ends in</h1>

        <ICOtimer />

        <Button
        onClick={()=>window.open("https://cryptoland.icoadm.in/")}
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

export default connect(mapStateToProps,{})(CryptoProgess)
