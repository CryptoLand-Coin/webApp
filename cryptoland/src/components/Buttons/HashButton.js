import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { ButtonContainer } from '../../styles'
import { withRouter } from 'react-router-dom'

function HashButton(props) {
   return(
       <ButtonContainer
        noDecoration
        noBackground
        textColor={`${props.location.hash === props.accordianId ? '#55E2BE' : !props.isInHero ? '#020202' : "white"}`}
        fontSize="0.925em"
        fontWeight="900"
        letterSpacing="1.5px"
       >
           <Link
            to={'/' + props.accordianId}
            scroll={el=>el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
           >
               <p>{props.text}</p>
           </Link>
       </ButtonContainer>
   )
}

export default withRouter(HashButton)
