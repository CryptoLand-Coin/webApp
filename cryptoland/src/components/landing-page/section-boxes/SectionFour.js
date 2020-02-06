import React from 'react'
import SectionBox from './SectionBox'

function SectionFour() {
  return (
    <>
      <SectionBox
        backgroundImage={'/assets/images/the_app.png'}
        title={'Tie your money to your lifestyle'}
        subTitle={'with theCryptoLand App.'}
        buttonLink={'app'}
        buttonName={'THE APP'}
        buttonColor={'white'}
        buttonTextColor={'green'}
        textColor={'white'}
        align={'right'}
      >
        <p>Our application provides an electric environment where brands and consumers can interact cohesively, while earning monetary rewards for their presence within the CryptoLand community.</p>
        <p>Share your passion for the things you love, and get paid while you do it.</p>
      </SectionBox>
    </>
  );
}

export default SectionFour
