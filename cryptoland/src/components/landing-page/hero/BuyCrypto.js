import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { BuyCryptoContainer } from "../../../styles";

import { Button } from "../../../components";

function CryptoProgress(props) {
  return (
    <BuyCryptoContainer>
      <h1>BUY ON</h1>
      <a
        style={{ marginTop: "2.5%" }}
        href="https://stellarport.io/exchange/GCBIJZQLTEVI6ZZYM4UH2LCUHNVNWUTZMQNOQTZWMOEAGDRWSWFDP2S3/CRYPTO/native/XLM"
        target="_blank"
      >
        <img src="assets/images/stellarport.png" />
      </a>
      <a
        href="https://lobstr.co/trade/native/CRYPTO:GCBIJZQLTEVI6ZZYM4UH2LCUHNVNWUTZMQNOQTZWMOEAGDRWSWFDP2S3"
        target="_blank"
      >
        <img src="assets/images/lobstr.svg" />
      </a>
      <a
        href="https://stellarterm.com/exchange/XLM-native/CRYPTO-GCBIJZQLTEVI6ZZYM4UH2LCUHNVNWUTZMQNOQTZWMOEAGDRWSWFDP2S3"
        target="_blank"
      >
        <h4>StellarTerm</h4>
      </a>
    </BuyCryptoContainer>
  );
}

const mapStateToProps = (state) => ({
  width: state.width,
});

export default connect(mapStateToProps, {})(CryptoProgress);
