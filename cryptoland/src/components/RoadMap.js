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
                height: '30vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '2em'
            }}>
                <h1>CONTENT COMING SOON</h1>
            </div>
          )}
        </AccordianSectionContainer>
      );
    }
  }