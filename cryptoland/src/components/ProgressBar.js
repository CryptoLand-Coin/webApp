import React, { useState, useEffect } from 'react'
import { ProgressBarContainer } from '../styles/ProgressBarContainer'

function ProgressBar() {

    const [funds, setFunds] = useState(0)
    const [percent, setPercent] = useState(`${(1 - (funds/500000000)) * 100}%`)

    useEffect(()=> {
        console.log(percent)
    }, [])

   return(
       <ProgressBarContainer percentageRemaining={percent}>
           
            
            <div className="progressBar" />

            <div className="progressContainer">
                <div className="overlayProgressBar" />
            </div>

            <div className="staticBar" />

            <div className="startfinish">
                <h1 className="sftext">START</h1>
                <div className="coincount">
                    <img src="assets/USD.png" />
                    <h1 className="count">{funds}</h1>
                    <h1>Capital Raised</h1>
                </div>
                <h1 className="sftext">FINISH</h1>
            </div>
       </ProgressBarContainer>
   )
}

export default ProgressBar