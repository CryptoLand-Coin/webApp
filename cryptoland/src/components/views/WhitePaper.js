import React from 'react'

import { ViewsContent } from '../../components'

function WhitePaper() {

  return(
    <ViewsContent whitepaper={true}>
      <div className='paper-container'>
        <iframe title='whitepaper-iframe' src="https://drive.google.com/file/d/1FxNNYA-sbyPNMtLACzJub_vIJCjbbU2_/preview" width={window.innerWidth} height="100%"></iframe>
      </div>
    </ViewsContent>
  )
}

export default WhitePaper
