import React from 'react'
import { AccordianSectionContainer } from '../styles'
import AcordianMenu from './Accordian/AccordianMenu'

export default class extends React.Component {
    state ={
      isShowing: false
    }
  
    clickHandler = () => {
      this.setState({ isShowing: !this.state.isShowing });
    };
  
    render() {
      return (
        <AccordianSectionContainer>
          <AcordianMenu
            clickHandler={this.clickHandler}
            text={'About CRYPTO'}
            isShowing={this.state.isShowing}
          />
          {this.state.isShowing && (
            <div style={{
                height: 'auto',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '2em',
                flexDirection: 'column'
            }}>
                <p style={{
                  width: '75%',
                  marginTop: '3%'
                }}>
                Cryptoland revolutionizes the fundamental fabric of traditional community building through the utilization of blockchain technology and the development of decentralized applications.</p>
 
                <p style={{
                  width: '75%',
                  marginTop: '3%'
                }}>Cryptoland empowers creators, innovators, and entrepreneurs with an educational community where valuable resources and networks are shared.</p>

                <p style={{
                  width: '75%',
                  marginTop: '3%',
                  marginBottom: '5%'
                }}>  
                Cryptoland provides community members a platform where users are rewarded for sharing their experiences, knowledge, creations, opinions, and wisdom.
                </p>
            </div>
          )}
        </AccordianSectionContainer>
      );
    }
  }