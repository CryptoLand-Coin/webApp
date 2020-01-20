import React, { Component } from 'react'
import { connect } from 'react-redux';

import { MenuItemContainer } from '../../styles'

class MenuItem extends Component {
  state = {
    hover:false,
  }

  handleHover = () => {
    this.setState({
      hover:!this.state.hover
    })
  }

  render(){
    return(
      <MenuItemContainer
        delay={this.props.delay}
        hover={this.state.hover}
        isInHero={this.props.isInHero}
      >
        <div
          className='menu-item'
          onMouseEnter={()=>{this.handleHover();}}
          onMouseLeave={()=>{this.handleHover();}}
          onClick={this.props.onClick}
        >
          {this.props.children}
        </div>
      <div className='line'/>
    </MenuItemContainer>
    )
  }
}

const mapStateToProps = state => ({
  isInHero: state.isInHero
})

export default connect(mapStateToProps, {})(MenuItem)
