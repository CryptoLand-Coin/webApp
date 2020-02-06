import React from 'react'

import { FaqQATextContainer } from '../../styles'

class FaqQA extends React.Component {
  state = {
      isShowing: false
  }

  clickHandler = () => {
      this.setState({
          isShowing: !this.state.isShowing
      })
  }
  render() {
    const { text, subText } = this.props
    return (
      <>
        <FaqQATextContainer onClick={this.clickHandler}>
          <h6>Q: {text}</h6>
          {this.state.isShowing ?  <i class="fas fa-angle-up fa-2x" />
          : <i class="fas fa-angle-down fa-2x" />}
        </FaqQATextContainer>
        {this.state.isShowing ?
          <FaqQATextContainer>
            <p>A: {subText}</p>
        </FaqQATextContainer>
        : null}
      </>
    )
  }
}

export default FaqQA
