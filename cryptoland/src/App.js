import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { AppContainer } from './styles'
import {
  Navigation,
  Tick,
  LandingPage,
  NoMatch,
  Footer,
  PrivacyPolicy,
  TermsAndConditions,
  Faqs,
  ContactUs
} from './components'

function App() {
  return (
    <AppContainer>
      <Navigation />
      <Tick />

      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/howitworks' component={NoMatch} />
        <Route path='/currency' component={NoMatch} />
        <Route path='/rewards' component={NoMatch} />
        <Route path='/app' component={NoMatch} />
        <Route path='/foundation' component={NoMatch} />
        <Route path='/faqs' component={Faqs} />
        <Route path='/contactus' component={ContactUs} />
        <Route path='/privacypolicy' component={PrivacyPolicy} />
        <Route path='/termsandconditions' component={TermsAndConditions} />

        <Route component={NoMatch} />
      </Switch>

      <Footer />
    </AppContainer>
  );
}

export default App;
