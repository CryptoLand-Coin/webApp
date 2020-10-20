import React, { Component } from "react";
import { connect } from "react-redux";

import { TickerContainer } from "../../../styles";

class Tick extends Component {
  state = {
    tickerInfoWidth: 0,
    tickerTiming: 0,
  };

  componentDidMount() {
    this.findTickerInfoWidth();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.width !== prevProps.width) {
      this.findTickerInfoWidth();
    }
  }

  findTickerInfoWidth = () => {
    const tickerInfoWidth = document.querySelector("#ticker-info").offsetWidth;
    const tickerTiming = (this.props.width + tickerInfoWidth) / 50;

    this.setState({
      tickerInfoWidth: tickerInfoWidth,
      tickerTiming: tickerTiming,
    });
  };

  render() {
    return (
      <TickerContainer
        id="ticker"
        isInHero={this.props.isInHero}
        width={this.props.width}
        timing={this.state.tickerTiming}
        tickerInfoWidth={this.state.tickerInfoWidth}
      >
        <div className="ticker-wrap">
          <div className="ticker-move">
            <div id="ticker-info" className="ticker-item">
              <h1>CURRENT MARKET VALUE:</h1>
              <p>Cryptoland (CRYPTO) </p>
              <h1>$92.32716 USD</h1>
              {/* <i className="fas fa-sort-up " /> */}
              {/* <p>$37.80 (+38%)</p> */}
            </div>
          </div>
        </div>
      </TickerContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  width: state.width,
  isInHero: state.isInHero,
});

export default connect(mapStateToProps, {})(Tick);
