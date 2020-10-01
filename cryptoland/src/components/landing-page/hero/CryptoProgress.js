import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import moment from "moment";

import { CryptoProgressContainer } from "../../../styles";

import { ICOtimer, Button } from "../../../components";

function CryptoProgress(props) {
  const [icoCompleted, setIcoCompleted] = useState(false);

  useEffect(() => {
    const endTime = moment(1601618400000)
    const calculateTime = () => {
      // difference of dates
      const diff = endTime.diff(moment());
      if (diff <= 0) {
        setIcoCompleted(true);
      }
    };
    calculateTime();
    setInterval(() => {
      calculateTime();
    }, 1000);
  }, []);
  return (
    <CryptoProgressContainer>
      <div className="progress-container">
        <div className="purchaseHeader">
          <p>
            {props.width < 620 ? "Purchase with:" : "Purchase CRYPTO with:"}
          </p>

          <div className="currency-container">
            <div className="currency-row">
              <div>
                <img src="/assets/images/USD.png" alt="USD currency logo" />
                <p>USD</p>
              </div>
              <div>
                <img src="/assets/images/BTC.png" alt="BTC currency logo" />
                <p>BTC</p>
              </div>
              <div>
                <img src="/assets/images/ETH.png" alt="ETH currency logo" />
                <p>ETH</p>
              </div>
              <div>
                <img src="/assets/images/LTC.png" alt="LTC currency logo" />
                <p>LTC</p>
              </div>
            </div>

            <div className="currency-row">
              <div>
                <img src="/assets/images/XRP.png" alt="XRP currency logo" />
                <p>XRP</p>
              </div>
              <div>
                <img src="/assets/images/EOS.png" alt="EOS currency logo" />
                <p>EOS</p>
              </div>
              <div>
                <img src="/assets/images/DASH.png" alt="DASH currency logo" />
                <p>DASH</p>
              </div>
              <div>
                <p>More...</p>
              </div>
            </div>
          </div>
        </div>

        <h1>{icoCompleted ? "ICO period has" : "ICO ends in"}</h1>

        <ICOtimer />

        <Button
          onClick={() => window.goToDashboard()}
          background="linear-gradient(to right, #6BDFC7 0%, #00EB9A 100%);}"
          width="84%"
          padding="10px 0"
          margin="4% 0"
          textColor="white"
          fontSize="1em"
          fontWeight="900"
          letterSpacing="1.5px"
        >
          BUY CRYPTO
        </Button>

        {/* <ProgressBar /> */}
      </div>
    </CryptoProgressContainer>
  );
}

const mapStateToProps = (state) => ({
  width: state.width,
});

export default connect(mapStateToProps, {})(CryptoProgress);
