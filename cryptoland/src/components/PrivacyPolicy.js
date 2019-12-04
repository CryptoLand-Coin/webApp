import React from 'react';

export default function() {
  return (
    <>
        <div
          style={{
            marginTop: '100px',
            width: '100%',
            height: '100vh',
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
              Privacy Policy
            </h1>
            <div style={{ height: '100vh'}}>
                <iframe src="https://drive.google.com/file/d/1wMh8_nMLoU2OYOBDwoKsJRtNoCEduGcT/preview" width={window.innerWidth} height="100%"></iframe>
            </div>
          </div>
        </div>
    </>
  );
}
