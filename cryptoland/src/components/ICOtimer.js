import React, { useState } from 'react'
import moment from 'moment/min/moment-with-locales'
import { TimerContainer } from '../styles/ICOtimer'

function ICOtimer() {
    const [time, setTime] = useState()
    setInterval(()=>{
        const endTime = moment("07/31/2020")
        const startTime = moment(Date.now())
        const diff = endTime.diff(startTime)
        const days = Math.floor( diff/(1000*60*60*24))
        const hours = Math.floor( (diff/(1000*60*60) % 24))
        const minutes = Math.floor( (diff/1000/60) % 60)
        const seconds = Math.floor( (diff/1000) % 60)
        setTime({
            days,
            hours,
            minutes,
            seconds
        })
    }, 1000)
   return(
           <TimerContainer>
               {time && 
               <>
                   <div>
                       <h1>{time.days}</h1>
                       <p>DAYS</p>
                   </div>
                   <span>:</span>
                   <div>
                       <h1>{time.hours}</h1>
                       <p>HOURS</p>
                   </div>
                   <span>:</span>
                   <div>
                       <h1>{time.minutes}</h1>
                       <p>MINUTES</p>
                   </div>
                   <span>:</span>
                   <div>
                       <h1>{time.seconds}</h1>
                       <p>SECONDS</p>
                   </div>
               </>}
           </TimerContainer>
   )
}

export default ICOtimer