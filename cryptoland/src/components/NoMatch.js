import React from 'react'
import { withRouter } from 'react-router-dom'

function NoMatch(props) {
    setTimeout(()=>{
        props.history.push('/')
    }, 2000)
    return(
        <>
            <p>The Page you are looking for was not found</p>
        </>
    )
}

export default withRouter(NoMatch)