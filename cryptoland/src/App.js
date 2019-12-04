import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

import { AppContainer } from './styles'
import { Navigation, Ticker, LandingPage, NoMatch, Footer } from './components'

function App() {
  return (
    <AppContainer>
      <Navigation />
      <Ticker />

      <Switch>
        <Route exact path='/' component={LandingPage} />

        <Route component={NoMatch} />
      </Switch>  
      
      <Footer />
    </AppContainer>
  );
}

export default App;
