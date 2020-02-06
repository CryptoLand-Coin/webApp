import styled, { keyframes } from 'styled-components'

// --------------------------------------------------------
// Keyframes for ticker anitmation
const ticker = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-100%, 0, 0);
  }
`

export const TickerContainer = styled.div`
    width: 100%;
    display: flex;
    background-color: #020202;
    font-size: .8em;
    align-items: center;
    margin-top: ${props => props.width > 1200 ? '100px' : '75px'};
    position: fixed;
    padding: 0.7% 0;
    /* box-shadow: 0px 0px 29px 0px rgba(63,235,154,.25); */
    z-index: 1;
    transition: all .2s ease;
    overflow: hidden;

    .ticker-wrap {
      width: 100%;
      padding-left: 100%;
      /* background-color: #eee; */

      .ticker-move {
        display: inline-block;
        white-space: nowrap;
        padding-right: ${props => `${props.width}px`};
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-name: ${ticker};
        animation-duration: ${props => `${props.timing}s`};

        &:hover {
          animation-play-state: paused;
        }

        .ticker-item {
          display: flex;
          flex-direction: row;

          h1 {
              font-weight: 900;
              margin-left: 1%;
              color: #efefef;
          }

          p {
              margin-left: 0.25%;
              color: #efefef
          }

          i {
              padding-left: 0.5%;
              transform: translate(0px, 25%);
              color: #01A76E;
          }

          p:first-child {
              margin-right: 2%;
          }

          p:last-child {
              color: #01A76E;
              font-weight: 700;
          }
        }
      }
    }
`
