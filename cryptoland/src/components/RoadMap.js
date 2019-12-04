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
            text={'Road Map'}
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

              <h3>— 2020 —</h3>
              

              <div style={{
                marginTop: '2.5%',
                width: '75%',
                textAlign: 'left'
              }}>
                <ul>January 1: Development of Cryptoland Blockchain Protocol Begins</ul>
                
  
                <ul style={{
                  marginTop: '2.5%',
                }}>May 30: Cryptoland Foundation Summer Mini-Golf Tournament - San Diego, CA</ul>
                
                <ul style={{
                  marginTop: '2.5%',
                }}>Summer 2020: 1st Annual CryptolandIA Music Festival</ul>
  
                <ul style={{
                  marginTop: '2.5%',
                }}>Fall 2020: Cryptoland Media Expansion Project (Phase 2 of 3)</ul>
              </div>
            </div>
          )}
        </AccordianSectionContainer>
      );
    }
  }