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

  scrollElement = accordianId => {

    // check if id matches possible locations array
    if(this.props.lpLoadedIn && !this.state.menuOpen) {
      this.scrollUtil(accordianId)
    } else {
      setTimeout(() => {
        this.scrollUtil(accordianId)
      }, 1000)
    }

    // Sets state with current accordianId for future use.
    this.setState({
      ...this.state,
      previousAccordionId: accordianId
    })

  }

  scrollUtil = accordianId => {
    // array of anchors
    const locations = ['#howitworks', '#whitepaper', '#roadmap', '#hero']

    // check if id matches possible locations array
    if(locations.includes(accordianId)) {

      const element = document.querySelector(`${accordianId}`)
      const navbarOffset = (accordianId === '#hero') ? 0 : this.props.width < 960 ? -94 : -120;
      let previousAccordionHeight = 0
      let y

      // Gets height of previous open div
      if(this.state.previousAccordionId && this.state.previousAccordionId !== accordianId) {
        previousAccordionHeight = document.querySelector(`${this.state.previousAccordionId}`).clientHeight - 80
      }

      // Subtracts previous Div's height from calc if element top is not less than 120 or the previous div is the hero
      if(element.getBoundingClientRect().top < 120 || this.state.previousAccordionId === '#hero') {
        y = element.getBoundingClientRect().top + window.scrollY + navbarOffset;
      } else {
        y = element.getBoundingClientRect().top + window.scrollY + navbarOffset - previousAccordionHeight;
      }

      window.scroll({ top: y, behavior: 'smooth' })

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
            <a href='https://cryptoland.icoadm.in/?referral=<referral>' >{item}</a>
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
                  onClick={() => {
                    this.props.history.push('/')
                    this.scrollElement('#hero')
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
