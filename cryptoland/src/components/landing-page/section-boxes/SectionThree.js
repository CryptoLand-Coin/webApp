import React from 'react'
import SectionBox from './SectionBox'

function SectionThree() {
  return (
    <>
      <SectionBox
        backgroundImage={'/assets/images/the_rewards.png'}
        title={'Treat yourself'}
        subTitle={'to a currency that rewards you'}
        buttonLink={'rewards'}
        buttonName={'THE REWARDS'}
        buttonColor={'green'}
        buttonTextColor={'white'}
        textColor={'#3a3a3a'}
        align={'left'}
      >
        <p>not only as a traditional crypto-investment, but with monthly airdrops for holding the coin, using the app, interacting with brands, and being a part of the CryptoLand community.</p>
        <p>Our reward program lets you grow your coin-holding rapidly without lifting a finger.</p>
      </SectionBox>
    </>
  );
}

export default SectionThree
