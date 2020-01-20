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
