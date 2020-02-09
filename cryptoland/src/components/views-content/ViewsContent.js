import React, { Component } from 'react'
import { connect } from 'react-redux';

import { ViewsContentContainer } from '../../styles'

class ViewsContent extends Component {

  componentDidMount() {
    window.scroll({ top: 0, behavior: 'smooth' })
  }

  render() {
    return(
      <ViewsContentContainer
        width={this.props.width}
        whitepaper={this.props.whitepaper}
      >
        {this.props.children}
      </ViewsContentContainer>
    )
  }
}

const mapStateToProps = state => ({
  width: state.width,
})

export default connect(mapStateToProps, { })(ViewsContent)
