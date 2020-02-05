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
    isInHero: true,
    previousAccordionId: null
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

    if(pathname === '/contactus' ||pathname === '/faqs' || pathname === '/privacypolicy' || pathname === '/termsandconditions') {
      return null
    }

    // Finding div heights
    let navbarHeight

    const heroHeight = document.querySelector('#hero').clientHeight;
    const tickerHeight = document.querySelector('#ticker').clientHeight;

    if(this.props.width > 960) {
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
    const menu = ['HOW IT WORKS','WHITE PAPER','CURRENCY','REWARDS', 'APP', 'FOUNDATION','LOGIN']

    // Mapping out link items
    const menuItems = menu.map((item, i) => {
      const lowerItem = item.toLowerCase()
      const itemArr = lowerItem.split(' ')
      const itemLink = itemArr.join('')

      if(this.props.width <= 960) {
        return (
            <MenuItem
              key={i}
              delay={`${i * 0.1}s`}
            >
              {item === 'LOGIN' ? (
                <a href='https://cryptoland.icoadm.in/?referral=<referral>' >{item}</a>
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
        return (
          <Button
            key={i}
            noDecoration
            noBackground
            textColor={`${this.props.location.pathname === `/${itemLink}` ? '#55E2BE' : '#efefef'}`}
            fontSize="0.925em"
            fontWeight="900"
            letterSpacing="1.5px"
          >
            <Link to={`/${itemLink}`} >{item}</Link>
          </Button>
        )
      }
    })

    return (
      <>
        {this.props.width <= 960 ? (
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
          >
            <img style={{
                cursor: 'pointer'
            }}
            onClick={() => {
              this.props.history.push('/')
            }}
            src='./assets/images/Cryptoland_Logo_Green_Icon.png'
            alt='Cryptoland logo'
            />

            <div>
              {menuItems}

              <Button
                text="LOGIN"
                onClick={() => window.open("https://cryptoland.icoadm.in/?referral=<referral>")}
                background="linear-gradient(to right, #6BDFC7 0%, #00EB9A 100%);}"
                pPadding='10% 5%'
                textColor="white"
                fontSize=".9em"
                fontWeight="900"
                letterSpacing="1.5px"
               />

            </div>
          </NavigationContainer>
        )}
      </>
    )
  }

}

const mapStateToProps = state => ({
  width: state.width,
  lpLoadedIn: state.lpLoadedIn
})

export default connect(
  mapStateToProps,
  { updateDimensions, setNavbarLocation }
)(withRouter(Navigation))
