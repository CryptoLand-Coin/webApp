import React from 'react'

import { MemberBoxContainer } from '../../styles'

function MemberBox(props) {

  return(
    <MemberBoxContainer>
      <div className='member-image'>
        <img src={props.memberImage} />
      </div>

      <div className='member-main'>
        <div className='member-name'>
          <h1>{props.memberName}</h1>
        </div>

        <div className='member-body'>
          {props.children}
        </div>
      </div>
    </MemberBoxContainer>
  )
}

export default MemberBox
