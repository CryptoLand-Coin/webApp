import React, { Component } from 'react'
import moment from 'moment'
import { TimerContainer } from '../styles/ICOtimer'

class ICOtimer extends Component {
  state = {
    endTime: moment("07/31/2020", "MM-DD-YYYY"),
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  }

  componentDidMount() {
    this.calculateTime()
    this.countDown()
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  calculateTime = () => {
    // difference of dates
    const diff = this.state.endTime.diff(moment())

    this.setState({
      // calculate time respectively
      days: Math.floor( diff/(1000*60*60*24) ),
      hours: Math.floor( (diff/(1000*60*60) % 24) ),
      minutes: Math.floor( (diff/1000/60) % 60 ),
      seconds: Math.floor( (diff/1000) % 60 )
    })
  }

  countDown = () => {
    this.timer = setInterval(()=>{
      this.calculateTime()
    }, 1000)
  }


  render() {
    const { days, hours, minutes, seconds } = this.state
    return(
      <TimerContainer>
        <>
          <div>
            <h1>{days}</h1>
            <p>DAYS</p>
          </div>
          <span>:</span>
          <div>
            <h1>{hours}</h1>
            <p>HOURS</p>
          </div>
          <span>:</span>
          <div>
            <h1>{minutes}</h1>
            <p>MINUTES</p>
          </div>
          <span>:</span>
          <div>
            <h1>{seconds}</h1>
            <p>SECONDS</p>
          </div>
        </>
      </TimerContainer>
    )
  }
}

export default ICOtimer
