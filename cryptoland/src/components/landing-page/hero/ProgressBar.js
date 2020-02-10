import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'

import { ProgressBarContainer } from '../../../styles'

class ProgressBar extends Component {
  state = {
    funds: 153487.39,
    percent: ''
  }

  async componentDidMount() {
    try {
      let coinRes = await axios.get('https://cryptoland.icoadm.in/api/v1/app_info?key=99a4b63abc97857eaf1f92f31ebf07cd', {
        headers: {
          'Access-Control-Allow-Origin' : 'https://cryptolandico.com, https://cryptolandico.io, https://cryptoland.io',
          'Vary' : 'Origin',
        }
      })

      const funds = coinRes.data.ico_total_usd

      const today = moment()
      const endDate = moment("07/31/2020")

      this.setState({
        funds: funds,
        percent: `${Math.floor((1 - (endDate.diff(today, 'days')/188)) * 100)}%`
      })
    } catch(err) {

    }

  }

    render() {
      console.log(this.state.percent)
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
