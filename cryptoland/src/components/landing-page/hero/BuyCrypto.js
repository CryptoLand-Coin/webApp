import React from "react";
import { connect } from "react-redux";

import { BuyCryptoContainer } from "../../../styles";

function CryptoProgress() {
  return (
    <BuyCryptoContainer>
      <h1>BUY ON</h1>
      <a
        style={{ marginTop: "2.5%" }}
        href="https://stellarport.io/exchange/GCBIJZQLTEVI6ZZYM4UH2LCUHNVNWUTZMQNOQTZWMOEAGDRWSWFDP2S3/CRYPTO/native/XLM"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="assets/images/stellarport.png" alt="stellarport" />
      </a>
      <a
        href="https://lobstr.co/trade/native/CRYPTO:GCBIJZQLTEVI6ZZYM4UH2LCUHNVNWUTZMQNOQTZWMOEAGDRWSWFDP2S3"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="assets/images/lobstr.svg" alt="lobstr" />
      </a>
      <a
        href="https://stellarterm.com/exchange/XLM-native/CRYPTO-GCBIJZQLTEVI6ZZYM4UH2LCUHNVNWUTZMQNOQTZWMOEAGDRWSWFDP2S3"
        target="_blank"
        rel="noopener noreferrer"
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
