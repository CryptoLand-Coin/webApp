import React from 'react'
import { ButtonContainer } from '../../styles'

function Button(props) {
   return(
       <ButtonContainer
        {...props}
       >
           <p>{props.text}</p>
       </ButtonContainer>
   )
}

export default Button