import React from 'react'

import AcordianMenu from './Accordian/AccordianMenu'

function WhitePaper() {
  return (
    <>
      <AcordianMenu text={'White Paper'}>
        <div
          style={{
            marginTop: '100px',
            width: '100%',
            height: '85vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'black',
            color: 'white',
            flexDirection: 'column',
            paddingBottom: '5%'
          }}
        >
          <div style={{ padding: '20px' }}>
            <div style={{ height: '85vh'}}>
                <iframe title='whitepaper-iframe' src="https://drive.google.com/file/d/1_UqRwB0PVAWJkezx754D3MI77MBpSLt4/preview" width={window.innerWidth} height="100%"></iframe>
            </div>
          </div>
        </div>
      </AcordianMenu>
    </>
  );

}
export default WhitePaper
