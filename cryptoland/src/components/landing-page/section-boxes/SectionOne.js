import React from 'react'
import SectionBox from './SectionBox'

function SectionOne() {
  return (
    <>
      <SectionBox
        backgroundImage={'/assets/images/how_it_works.png'}
        title={'Social media, meet [CRYPTO]currency.'}
        subTitle={'It’s time your money worked for you while you work for it.'}
        buttonLink={'howitworks'}
        buttonName={'HOW IT WORKS'}
        buttonColor={'white'}
        buttonTextColor={'green'}
        textColor={'white'}
        align={'left'}
      >
        <p>CryptoLand couples a cutting-edge social platform with a globally recognized, easy-to-use coin.</p>
        <p>We provide our community members and coin holders an environment to grow their financial assets without hindering their ability to spend them. </p>
      </SectionBox>
    </>
  );
}

export default SectionOne
