import React from 'react'
import { withRouter } from 'react-router-dom'
import { NavigationContainer } from '../styles'

function Navigation(props) {
    return(
        <NavigationContainer>
            <img style={{
                cursor: 'pointer'
            }}
            onClick={()=>props.history.push('/')} 
            src='assets/Cryptoland_Logo_White.png' />

            <h1>Sign In</h1>
        </NavigationContainer>
    )
}

export default withRouter(Navigation)