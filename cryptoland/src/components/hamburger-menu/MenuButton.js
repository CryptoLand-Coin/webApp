import React, { Component } from 'react'

import { MenuButtonContainer } from '../../styles'

class MenuButton extends Component {
  state = {
    open: this.props.open ? this.props.open : false,
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({
        open: nextProps.open
      })
    }
  }

  handleClick(){
    this.setState({
      open: !this.state.open
    })
  }

  render(){
    console.log('menu button color: ', this.props.color)
    return(
      <MenuButtonContainer
        open={this.state.open}
        color={this.props.color}
        onClick={this.props.onClick ? this.props.onClick :
          ()=> {this.handleClick()}}>
        <div className='line line-top'/>
        <div className='line line-middle'/>
        <div className='line line-bottom'/>
      </MenuButtonContainer>
    )
  }
}

export default MenuButton
