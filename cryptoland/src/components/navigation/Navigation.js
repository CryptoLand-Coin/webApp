import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'

import {
  MenuItem,
  Menu,
  MenuButton,
  MenuFooter,
  Button
} from '../../components'

import { updateDimensions, setNavbarLocation } from '../../store/actions';

import {
  NavigationContainer,
  HamburgerMenuContainer,
} from '../../styles'



class Navigation extends Component {
  state={
    menuOpen: false,
    isInHero: true
  }

  componentDidMount() {
    // setting window resize
    let width = window.innerWidth;
    let height = window.innerHeight;
    let resizeObj = { width, height };
    this.props.updateDimensions(resizeObj);
    window.addEventListener('resize', this.props.updateDimensions);

    // change navbar on scroll
    window.addEventListener('scroll', this.handleNavbarLocation);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.props.updateDimensions);
    window.removeEventListener('scroll', this.handleNavbarLocation);
  }

  handleNavbarLocation = () => {

    const { pathname } = this.props.history.location

    if(pathname !== '/') {
      return null
    }

    // Finding div heights
    let navbarHeight

    const heroHeight = document.querySelector('#hero').clientHeight;
    const tickerHeight = document.querySelector('#ticker').clientHeight;

    if(this.props.width > 1200) {
      navbarHeight = document.querySelector('#navbar').clientHeight;
    } else {
      navbarHeight = document.querySelector('#mobileNavbar').clientHeight;
    }

    const isInHero = window.scrollY < heroHeight - (navbarHeight + tickerHeight);

    if (isInHero !== this.state.isInHero) {
        this.setState({
          ...this.state,
          isInHero: isInHero
        }, () => this.props.setNavbarLocation(this.state.isInHero))
    }
  }

  handleMenuClick = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  }

  handleLinkClick = () => {
    this.setState({
      menuOpen: false
    });
  }

  render() {
    // Array of link titles
    const menu = ['WHITE PAPER', 'HOW IT WORKS','CURRENCY','REWARDS', 'APP', 'FOUNDATION', 'TEAM','LOGIN']

    // Mapping out link items
    const menuItems = menu.map((item, i) => {
      const lowerItem = item.toLowerCase()
      const itemArr = lowerItem.split(' ')
      const itemLink = itemArr.join('')

      if(this.props.width <= 1200) {
        // --- Mobile menu ---
        return (
            <MenuItem
              key={i}
              delay={`${i * 0.1}s`}
            >
              {item === 'LOGIN' ? (
                <button onClick={() => window.goToDashboard()} >{item}</button>
              )
              : (
                <Link
                 to={`/${itemLink}`}
                 onClick={this.handleLinkClick}
                >
                    <p>{item}</p>
                </Link>
              )}

            </MenuItem>
          )
      } else {
          if(item !== 'LOGIN') {
            return (
              <Button
                key={i}
                noDecoration
                noBackground
                textColor={`${this.props.location.pathname === `/${itemLink}` ? '#55E2BE' : this.props.location.pathname === '/' ? '#efefef' : '#808080'}`}
                fontSize="0.925em"
                fontWeight="900"
                letterSpacing="1.5px"
                margin='0 10px 0 0'
              >
                <Link to={`/${itemLink}`} >{item}</Link>
              </Button>
            )
          } else {
            return (
              <Button
                key={i}
                onClick={() => window.goToDashboard()}
                noBackground
                border='2px solid #00eb9a'
                pPadding='10% 5%'
                textColor={this.props.location.pathname === '/' ? 'white' : '#808080'}
                fontSize=".9em"
                fontWeight="900"
                letterSpacing="1.5px"
              >
                <p>{item}</p>
              </Button>
            )
          }
      }
    })

    return (
      <>
        {this.props.width <= 1200 ? (
          <>
            <HamburgerMenuContainer
              id='mobileNavbar'
              open={this.state.menuOpen}
              isInHero={this.state.isInHero}
            >
              <div className='menu-logo'>
                <img
                  src='./assets/images/Cryptoland_Logo_Green_Icon.png'
                  alt='Cryptoland company logo'
                  onClick={() => {
                    this.props.history.push('/')
                    this.handleMenuClick()
                  }}
                />
              </div>
              <MenuButton
                open={this.state.menuOpen}
                color={'white'}
                onClick={()=>this.handleMenuClick()}
              />
            </HamburgerMenuContainer>
            <Menu
              open={this.state.menuOpen}

            >
              <div className='menu-body'>
                {menuItems}
                <MenuFooter />
              </div>
            </Menu>
          </>
        ) : (
          <NavigationContainer
            id='navbar'
            isInHero={this.state.isInHero}
            path={this.props.location.pathname}
          >
            <img
              style={{cursor: 'pointer'}}
              onClick={() => this.props.history.push('/')}
              src={(this.props.location.pathname === '/') ? './assets/images/Cryptoland_Logo_Green_Icon.png' : './assets/images/Cryptoland_Logo_ALL_Green.png'}
              alt='Cryptoland logo'
            />
            <div>
              {menuItems}
            </div>
          </NavigationContainer>
        )}
      </>
    )
  }

}

const mapStateToProps = state => ({
  width: state.width,
})

export default connect(
  mapStateToProps,
  { updateDimensions, setNavbarLocation }
)(withRouter(Navigation))
