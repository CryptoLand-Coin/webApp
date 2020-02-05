import React from 'react'
import SectionBox from './SectionBox'

function SectionFive() {
  return (
    <>
      <SectionBox
        backgroundImage={'/assets/images/foundation.png'}
        title={'Our goal is to give'}
        subTitle={'and we do it in more ways than one.'}
        buttonLink={'foundation'}
        buttonName={'FOUNDATION'}
        buttonColor={'green'}
        give={true}
        align={'left'}
      >
        <p>CryptoLand is determined to empower the positive aspects of business, whilehelping solve widespread issues throughout the world.</p>
        <p>Our charitable program places us in a position to give, powerfully and meaningfully, to help resolve issues our community members care deeply about.</p>
      </SectionBox>
    </>
  );
}

export default SectionFive
