import React from 'react';
import { AccordianSectionContainer, AccordianTextContainer } from '../styles';
import AcordianMenu from './Accordian/AccordianMenu';

export default class extends React.Component {
  state = {
    isShowing: false
  };

  clickHandler = () => {
    this.setState({ isShowing: !this.state.isShowing });
  };

  render() {
    return (
      <AccordianSectionContainer>
        <AcordianMenu
          clickHandler={this.clickHandler}
          text={'Cryptoland Application'}
          isShowing={this.state.isShowing}
        />
        {this.state.isShowing && (
          <AccordianTextContainer style={{}}>
            <p>
              The CRYPTOLAND mobile application gives community members a
              networking environment that provides a podium to share brilliant
              content, collaborate with peers, absorb best practices, and earn
              tangible currency while conducting these mission critical tasks.
              An application designed with one core goal in mind: Growth.
              Empowering our community members to grow their brands, grow as
              business owners, and grow their financial portfolio is the highest
              priority the CRYPTOLAND application seeks to achieve. A dense
              ecosystem to promote, educate, learn, connect and thrive, this
              application creates a pulse among its users. Expose yourself to
              relevant content, connect with individuals who share your values,
              and take advantage of the benefit that networking has to offer,
              all within an application designed to feed not only your mind, but
              also your financial future. Within this app exists The CRYPTOLAND
              Vault, directly connected to the CRYPTO Utility Token, living and
              breathing alongside the users of this application, providing them
              multifaceted, cryptocurrency reward opportunities for their
              engagement within the app and their holding-status of the CRYPTO
              coin. At CRYPTOLAND we connect a powerful currency with an
              empowering networking application in order to connect our
              community members to other brilliant minds and a brilliant
              financial future.
            </p>
          </AccordianTextContainer>
        )}
      </AccordianSectionContainer>
    );
  }
}
