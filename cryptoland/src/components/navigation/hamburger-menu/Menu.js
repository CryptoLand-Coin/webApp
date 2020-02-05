import React, { Component } from 'react'
import { connect } from 'react-redux';

import { MenuContainer } from '../../../styles'

class Menu extends Component {
  state = {
    open: this.props.open ? this.props.open : false,
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({
        open: nextProps.open
      });
    }
  }

  render() {
    return(
      <MenuContainer
        id='menu'
        open={this.state.open}
        isInHero={this.props.isInHero}
      >
        {
          this.state.open ?
            <div className='menu-list'>
              {this.props.children}
            </div>
          : null
        }
      </MenuContainer>
    )
  }
}

const mapStateToProps = state => ({
  isInHero: state.isInHero
})

export default connect(mapStateToProps, {})(Menu)
