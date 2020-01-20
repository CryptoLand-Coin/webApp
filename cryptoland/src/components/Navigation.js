import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import HashButton from './Buttons/HashButton'
import Button from './Buttons/Button'

import {
  MenuItem,
  Menu,
  MenuButton,
  MenuFooter
} from '../components'

import { updateDimensions, setNavbarLocation } from '../store/actions';

import {
  NavigationContainer,
  HamburgerMenuContainer,
} from '../styles'



class Navigation extends Component {
  state={
    menuOpen: false,
    isInHero: true,
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

  scrollElement = accordianId => {
      const hashLocation = this.props.history.location.hash

      if(hashLocation.includes(accordianId) || accordianId === '#hero') {
        const element = document.querySelector(`${accordianId}`)
        const navbarOffset = (accordianId === '#hero') ? 0
        : this.props.width < 960 ? -115 : -120;
        const y = element.offsetTop + navbarOffset;
        window.scrollTo({ top: y, behavior: 'smooth' })
      }

  }

  render() {
    const menu = ['HOW IT WORKS','WHITE PAPER','ROADMAP','TEAM','LOGIN']
    const menuItems = menu.map((item, i) => {
      const lowerItem = item.toLowerCase()
      const itemArr = lowerItem.split(' ')
      const itemLink = itemArr.join('')

      return (
        <MenuItem
          key={i}
          delay={`${i * 0.1}s`}
        >
          {item === 'LOGIN' ? (
            <a href='https://cryptoland.icoadm.in/users/sign_in' >{item}</a>
          )
          : (
            <Link
             to={`/#${itemLink}`}
             onClick={() => {
               this.scrollElement(`#${itemLink}`)
               this.handleLinkClick()
             }}
            >
                <p>{item}</p>
            </Link>
          )}

        </MenuItem>
      )
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
                  src='./assets/Cryptoland_Logo_Green_Icon.png'
                  alt='Cryptoland company logo'
                  onClick={() => this.scrollElement('#hero')}
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
              scrollElement={this.scrollElement}
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
            onClick={async () => {
              await this.props.history.push('/')
              this.scrollElement('#hero')
            }}
            src='assets/Cryptoland_Logo_Green_Icon.png'
            alt='Cryptoland logo'
            />

            <div>
                <HashButton
                  text="HOW IT WORKS"
                  accordianId="#howitworks"
                  isInHero={this.state.isInHero}
                  scrollElement={this.scrollElement}
                />
                <HashButton
                  text="WHITE PAPER"
                  accordianId="#whitepaper"
                  isInHero={this.state.isInHero}
                  scrollElement={this.scrollElement}
                />
                <HashButton
                  text="ROADMAP"
                  accordianId="#roadmap"
                  isInHero={this.state.isInHero}
                  scrollElement={this.scrollElement}
                />
                <HashButton
                  text="TEAM"
                  accordianId="#team"
                  isInHero={this.state.isInHero}
                  scrollElement={this.scrollElement}
                />
                <Button
                onClick={() => window.open("https://cryptoland.icoadm.in/")}
                background="linear-gradient(to right, #6BDFC7 0%, #00EB9A 100%);}"
                padding='1.25%'
                textColor="white"
                fontSize=".9em"
                fontWeight="900"
                letterSpacing="1.5px"
                text="LOGIN" />
            </div>
          </NavigationContainer>
        )}
      </>
    )
  }

}

const mapStateToProps = state => ({
  width: state.width
})

export default connect(
  mapStateToProps,
  { updateDimensions, setNavbarLocation }
)(withRouter(Navigation))
