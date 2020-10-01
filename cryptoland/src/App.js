import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import { AppContainer } from "./styles";
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
  // Team,
  PrivacyPolicy,
  TermsAndConditions,
  Faqs,
  ContactUs,
} from "./components";

function App() {
  const [loadedImages, setLoadedImages] = useState(0);
  const [images, setImages] = useState([
    "Hero_BG.png",
    "foundation.png",
    "how_it_works.png",
    "the_app.png",
    "the_currency.png",
    "the_rewards.png",
  ]);
  const [appReady, setAppReady] = useState(false);
  const [fadeCompleted, setFadeCompleted] = useState(false);

  useEffect(() => {
    document.getElementById("root").classList.toggle("fade-root");
    document.getElementById("root").classList.toggle("fade-in");
    console.log(appReady);
    function PreloadImage(src, number) {
      var img = new Image();
      img.onload = function () {
        setLoadedImages(number);
      };
      img.src = src;
    }
    images.map((image, i) => {
      const adjustedIndex = i + 1;
      PreloadImage(`assets/images/${image}`, adjustedIndex);
      if (adjustedIndex === images.length) {
        setTimeout(() => {
          document.getElementById("root").classList.toggle("fade-in");
          document.getElementById("root").classList.toggle("fade-out");
          setTimeout(() => {
            setAppReady(true);
            document.getElementById("root").classList.toggle("fade-out");
            setTimeout(() => {
              setFadeCompleted(true);
              document.getElementById("root").classList.toggle("fade-in");
            }, 200);
          }, 500);
        }, 1000);
      }
    });
  }, []);

  if (!appReady || !fadeCompleted) {
    return (
      <div className="loading-container">
        <img
          src="assets/images/CryptoLand_Logo_White_Small.png"
          className="App-logo"
          alt="logo"
        />
      </div>
    );
  } else {
    return (
      <AppContainer>
        <Navigation />
        <Tick />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          {/* <Route path="/whitepaper" component={WhitePaper} /> */}
          <Route path="/howitworks" component={HowItWorks} />
          <Route path="/currency" component={Currency} />
          <Route path="/rewards" component={Rewards} />
          <Route path="/app" component={TheApp} />
          <Route path="/foundation" component={Foundation} />
          {/* <Route path="/team" component={Team} /> */}
          <Route path="/faqs" component={Faqs} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/privacypolicy" component={PrivacyPolicy} />
          <Route path="/termsandconditions" component={TermsAndConditions} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </AppContainer>
    );
  }
}

export default App;
