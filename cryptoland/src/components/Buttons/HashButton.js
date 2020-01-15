import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { ButtonContainer } from '../../styles'
import { withRouter } from 'react-router-dom'

function HashButton(props) {
   return(
       <ButtonContainer
        noDecoration
        noBackground
        textColor={`${props.location.hash === props.accordianId ? props.selectedColor : "white"}`}
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