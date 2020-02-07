import React from 'react'
import { connect } from 'react-redux';

import { ViewsContentContainer } from '../../styles'

function ViewsContent(props) {

  return(
    <ViewsContentContainer width={props.width} whitepaper={props.whitepaper}>
      {props.children}
    </ViewsContentContainer>
  )
}

const mapStateToProps = state => ({
  width: state.width,
})

export default connect(mapStateToProps, { })(ViewsContent)
