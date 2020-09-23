import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { AppContainer } from './styles'
import {
  Navigation,
  Tick,
  LandingPage,
  NoMatch,
  Footer,
  HowItWorks,
  Currency,
  Rewards,
  TheApp,
  Foundation,
  Team,
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
        {/*<Route path='/whitepaper' component={WhitePaper} />*/}
        <Route path='/howitworks' component={HowItWorks} />
        <Route path='/currency' component={Currency} />
        <Route path='/rewards' component={Rewards} />
        <Route path='/app' component={TheApp} />
        <Route path='/foundation' component={Foundation} />
        <Route path='/team' component={Team} />
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
