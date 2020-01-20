import React from 'react';

export default function() {
  return (
    <>
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
            <h1 style={{ marginTop: '5%', textAlign: 'center', fontSize: '3.3em', paddingBottom: '20px' }}>
              Terms and Conditions
            </h1>
            <div style={{ height: '85vh'}}>
                <iframe title='tmc-iframe' src="https://drive.google.com/file/d/1I49qrIhdYWNKvX4t--fNHCiAVh4k97UC/preview" width={window.innerWidth} height="100%"></iframe>
            </div>
          </div>
        </div>
    </>
  );
}
