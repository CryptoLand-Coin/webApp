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
            text={'White Paper'}
            isShowing={this.state.isShowing}
          />
          {this.state.isShowing && (
            <div
            style={{
              marginTop: '100px',
              width: '100%',
              height: '85vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'black',
              color: 'white',
              flexDirection: 'column',
              paddingBottom: '5%'
            }}
          >
            <div style={{ padding: '20px' }}>
              <div style={{ height: '85vh'}}>
                  <iframe src="https://drive.google.com/file/d/18b1kyiku0oeAbaBGVlIGL0Ie-Y42Xs5S/preview" width={window.innerWidth} height="100%"></iframe>
              </div>
            </div>
          </div>
          )}
        </AccordianSectionContainer>
      );
    }
  }