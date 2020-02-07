import React from 'react'
import SectionBox from './SectionBox'

function SectionFive() {
  return (
    <>
      <SectionBox
        backgroundImage={'/assets/images/foundation.png'}
        title={'Our goal is to give'}
        subTitle={'And we do it in more ways than one.'}
        buttonLink={'foundation'}
        buttonName={'FOUNDATION'}
        buttonColor={'green'}
        buttonTextColor={'white'}
        textColor={'#3a3a3a'}
        give={true}
        align={'left'}
      >
        <p>CryptoLand is determined to empower the positive aspects of business while helping solve widespread issues throughout the world.</p>
        <p>Our charitable program places us in a position to give, and to help resolve issues our community members care deeply about in a powerful and meaningful way.</p>
      </SectionBox>
    </>
  );
}

export default SectionFive
