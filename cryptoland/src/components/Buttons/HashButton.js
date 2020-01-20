import React from 'react'
// import { HashLink as Link } from 'react-router-hash-link'
import { ButtonContainer } from '../../styles'
import { withRouter, Link } from 'react-router-dom'

function HashButton(props) {

   return(
       <ButtonContainer
        noDecoration
        noBackground
        textColor={`${props.location.hash === props.accordianId ? '#55E2BE' : '#efefef'}`}
        fontSize="0.925em"
        fontWeight="900"
        letterSpacing="1.5px"
       >
           <Link
            to={'/' + props.accordianId}
            onClick={() => props.scrollElement(props.accordianId)}
           >
               <p>{props.text}</p>
           </Link>
       </ButtonContainer>
   )
}

export default withRouter(HashButton)
