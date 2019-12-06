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
          text={'Utility Token'}
          isShowing={this.state.isShowing}
        />
        {this.state.isShowing && (
          <AccordianTextContainer style={{}}>
            <p>
              The CRYPTO Utility Token is a globally recognized, intelligent
              currency. In an innovative economic climate that demands
              efficiency, brands and consumers require a smarter way to accept
              and distribute funds, without costly fees and disruptive transfer
              delays. CRYPTO provides just that, giving business owners,
              artists, athletes, entertainers, influencers and their followers a
              currency growing in strength and availability. As the global
              economy moves on from diminishing cash assets, CRYPTO provides its
              community members a proactive way to capitalize on every penny
              they earn.
            </p>

            <p>
              Incentives for Holders CRYPTOLAND believes that your dollar should
              be working for you while you work for it. The CRYPTOLAND Incentive
              Program rewards community members for their networking efforts
              with tangible, monetary returns. Paying you for tasks you're
              already performing, the "Good Vibes" reward program automatically
              distributes CRYPTO Utility Tokens for creating, viewing, liking
              and sharing content within the CRYPTOLAND Networking application,
              allowing our community members to not only promote their brands,
              but earn while they do it. Extending our benefit further,
              CRYPTOLAND rewards our loyal community members by offering a 1
              percent monthly dividend on CRYPTO held within the Stellar Wallet.
              At CRYPTOLAND we provide an environment that allows our partners
              to focus on perfecting their content and promoting their brands,
              while we simultaneously facilitate the growth of their financial
              future.
            </p>
          </AccordianTextContainer>
        )}
      </AccordianSectionContainer>
    );
  }
}
