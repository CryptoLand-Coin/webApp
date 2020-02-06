import styled, { keyframes } from 'styled-components'

export const NavigationContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 1;
    opacity: ${props => props.isInHero ? '0.9' : '1'}
    background-color: #020202;
    transition: all 0.2s ease;


    img {
        width: 15%;
        height: auto;
        margin-left: 4%;
    }

    div {
        width: 75%;
        display: flex;
        justify-content: flex-end;
        margin-right: 4%;
    }
`

// ------------------------------------------------------------------
// Hamburger Menu Styles

const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const slideIn = keyframes`
  0% {
    transform: translateX(-2%);
  }
  100% {
    transform: translateX(0);
  }
`

const shrink = keyframes`
  0% {
    width: 95%;
  }
  100% {
    width: 90%;
  }
`

export const HamburgerMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  opacity: ${props => props.isInHero ? '0.9' : '1'}
  display: flex;
  align-items: center;
  background-color: #020202;
  width: 100%;
  color: white;
  height: 75px;
  transition: all .2s ease;

  .menu-logo {
    margin: 0 auto;

    img {
      height: 60px;
    }
  }

  .menu-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
    filter: ${props => props.open ? 'blur(2px)': null};
    transition: filter 0.5s ease;
  }
`

export const MenuButtonContainer = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px 20px 4px 4px;

  .line {
    height: 2px;
    width: 20px;
    background-color: ${props => props.color};
    transition: all 0.2s ease;
  }

  .line-top {
    transform: ${props => props.open ? 'rotate(45deg)' : 'none'};
    transform-origin: top left;
    margin-bottom: 5px;
  }

  .line-middle {
    opacity: ${props => props.open ? '0' : '1'};
    transform: ${props => props.open ? 'translateX(-16px)' : 'none'};
  }

  .line-bottom {
    transform: ${props => props.open ? 'translateX(-1px) rotate(-45deg)' : 'none'};
    transform-origin: top left;
    margin-top: 5px;
  }
`

export const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: ${props => props.open ? '100%' : '0'}
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: #020202;
  opacity: 0.95;
  color: #efefef;
  transition: height 0.3s ease;
  z-index: 2;

  .menu-list {
    padding-top: 90px;
  }
`

export const MenuItemContainer = styled.div`
  opacity: 0;
  animation: 1s ${appear} forwards;
  animation-delay: ${props => props.delay};

  .menu-item {
    font-size: 1.2rem;
    padding: 1rem 0;
    margin: 0 5%;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    animation: 0.5s ${slideIn} forwards;
    animation-delay: ${props => props.delay};

    a {
      color: ${props => props.hover ? 'gray': '#efefef'};
      text-decoration: none;
    }
  }

  .line {
    width: 90%;
    height: 1px;
    background-color: gray;
    margin: 0 auto;
    animation: 0.5s ${shrink} forwards;
    animation-delay: ${props => props.delay};
  }
`
// ------------------------------------------------------------------
