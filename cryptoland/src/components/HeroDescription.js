import React from "react";
import { HeroDescriptionContainer } from "../styles";
import WPHashButton from "./Buttons/WPHashButton";

function HeroDescription() {
  return (
    <HeroDescriptionContainer>
      <div className="interiorContainer">
          <h1>The Cryptocurrency we have all been waiting for</h1>
          <p>
            A completely decentralized world-wide network <br/> 
            where you own your data,
            content & engagament.
          </p>
          <strong>Then get paid for it</strong>
          <ul>
            <div>
              <i class="far fa-check-circle" />
              <li>Invest in a transactionable currency for everyone</li>
            </div>
            <div>
              <i class="far fa-check-circle" />
              <li>The first worldwide decentralized social network</li>
            </div>
            <div>
              <i class="far fa-check-circle" />
              <li>Contributors own their data</li>
            </div>
          </ul>
          <WPHashButton accordianId="#whitepaper" text="WHITE PAPER"
          />
      </div>
    </HeroDescriptionContainer>
  );
}

export default HeroDescription;
