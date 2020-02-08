import React, { Component } from 'react'
import axios from 'axios'

import { ProgressBarContainer } from '../../../styles'

class ProgressBar extends Component {
  state = {
    funds: 0,
    percent: ''
  }

  async componentDidMount() {
    try {
      let coinRes = await axios.get('https://cryptoland.icoadm.in/api/v1/app_info?key=99a4b63abc97857eaf1f92f31ebf07cd')

      console.log(coinRes)

      const funds = coinRes.ico_total_usd

      const setPercent = funds => {
        return `${(1 - (funds/1000000000)) * 100}%`
      }

      this.setState({
        funds: funds,
        percent: setPercent(funds)
      })
    } catch(err) {

    }

  }

    render() {
      return(
          <ProgressBarContainer percentageRemaining={this.state.percent}>


               <div className="progressBar" />

               <div className="progressContainer">
                   <div className="overlayProgressBar" />
               </div>

               <div className="staticBar" />

               <div className="startfinish">
                   <h1 className="sftext">START</h1>
                   <div className="coincount">
                       <div>
                         <img src="assets/images/USD.png" alt='USD curreny logo'/>
                         <h1 className="count">{this.state.funds.toLocaleString()}</h1>
                       </div>
                       <h1 className='capital'>Capital Raised</h1>
                   </div>
                   <h1 className="sftext">FINISH</h1>
               </div>
          </ProgressBarContainer>
      )
    }
}

export default ProgressBar
