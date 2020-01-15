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
            src='assets/Cryptoland_Logo_White.png' />

            <HashButton selectedColor="green" text="HOW IT WORKS" accordianId="#howitworks" />
            <HashButton selectedColor="green"
            text="WHITE PAPER" accordianId="#whitepaper" />
            <HashButton selectedColor="green"
            text="ROADMAP" accordianId="#roadmap" />
            <HashButton selectedColor="green"
            text="TEAM" accordianId="#team" />
            <Button text="Log In" />
        </NavigationContainer>
    )
}

export default withRouter(Navigation)