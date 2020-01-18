import React from 'react'
import { AccordianSectionContainer, AccordianTextContainer } from '../styles'
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
        <AccordianSectionContainer id="howitworks">
          <AcordianMenu
            clickHandler={this.clickHandler}
            text={'HOW IT WORKS'}
            isShowing={this.state.isShowing}
          />
          {this.state.isShowing && (
            <AccordianTextContainer style={{

            }}>

              <p>
                Providing artists, entreprenuers, and businesss a network that goes beyond the traditional framework of shaking hands and learning names. CRYPTOLAND is a network designed not only to empower brands and individuals, but provide a tangible vessel to create, sustain, and grow long-term financial investment and security. </p>

                <p>
                CRYPTOLAND's native application creates a global, synergistic environment for users to conduct business and fortify earnings. Harnessing the known power of traditional networking, our platform transcends beyond the benefits involved with the forming new connections, and provides community members real, monetary incentives for their engagement and outreach efforts. </p>

                <p>
                A smarter network for a smarter generation of business, CRYPTOLAND works as diligently as its users to promote brands and grow wealth by providing both an application and currency that yield multi-faceted benefits from tasks already being performed by the innovators we aim to partner with.
                </p>
            </AccordianTextContainer>
          )}
        </AccordianSectionContainer>
      );
    }
  }
