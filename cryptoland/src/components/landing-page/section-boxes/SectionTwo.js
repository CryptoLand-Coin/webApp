import React from 'react'
import SectionBox from './SectionBox'

function SectionTwo() {
  return (
    <>
      <SectionBox
        backgroundImage={'/assets/images/the_currency.png'}
        title={'Save it. Grow it. Spend it. '}
        subTitle={'CryptoLand: A coin you can actually use.'}
        buttonLink={'currency'}
        buttonName={'THE CURRENCY'}
        ButtonColor={'green'}
        align={'right'}
      >
        <p>[CRYPTO] is a revolutionary utility token has global utility, lighting fast transactions and a growing value.</p>
        <p>Benefiting both merchant and consumer, [CRYPTO] connects audiences and brands in ways never before possible.</p>
      </SectionBox>
    </>
  );
}

export default SectionTwo
