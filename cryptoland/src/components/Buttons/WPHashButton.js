import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { ButtonContainer } from '../../styles'
import { withRouter } from 'react-router-dom'

function HashButton(props) {
   return(
       <ButtonContainer
        noDecoration
        fontSize="1em"
        fontWeight="900"
        letterSpacing="1px"
        textColor="#55E2BE"
        width="45%"
        padding="1.5% 0"
        margin="1.5% 0 0 0"
        backgroundColor="white"
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