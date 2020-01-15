import React from 'react'
import { withRouter } from 'react-router-dom'
import { NavigationContainer } from '../styles'

import HashButton from './Buttons/HashButton'
import Button from './Buttons/Button'

function Navigation(props) {
    return(
        <NavigationContainer>
            <img style={{
                cursor: 'pointer'
            }}
            onClick={()=>props.history.push('/')} 
            src='assets/Cryptoland_Logo_Green_Icon.png' />

            <div>
                <HashButton text="HOW IT WORKS" accordianId="#howitworks" />
                <HashButton 
                text="WHITE PAPER" accordianId="#whitepaper" />
                <HashButton 
                text="ROADMAP" accordianId="#roadmap" />
                <HashButton 
                text="TEAM" accordianId="#team" />
                <Button 
                background="linear-gradient(to right, #6BDFC7 0%, #00EB9A 100%);}"
                width='11%'
                padding='1.25%'
                textColor="white"
                fontSize=".9em"
                fontWeight="900"
                letterSpacing="1.5px"
                text="LOGIN" />
            </div>
        </NavigationContainer>
    )
}

export default withRouter(Navigation)