import React from "react";
import { HeroDescriptionContainer } from "../styles";
import WPHashButton from "./Buttons/WPHashButton";

function HeroDescription() {
  return (
    <HeroDescriptionContainer>
      <div className="interiorContainer">
          <h1>Smarter, faster, intuitive cryptocurrency 
designed for every-day use. </h1>
          <p>
          A thriving decentralized global currency coupled with a revolutionary social platform. In CryptoLand, members interact with content they love.
          </p>
          <strong>Then they get paid for it.</strong>
          <ul>
            <div>
              <i class="far fa-check-circle" />
              <li>Invest in a cryptocurrency that has real utility </li>
            </div>
            <div>
              <i class="far fa-check-circle" />
              <li>Explore the world’s first crypto-backed social media network</li>
            </div>
            <div>
              <i class="far fa-check-circle" />
              <li>Capitalize on your data, while solidifying your financial future</li>
            </div>
          </ul>
          <WPHashButton accordianId="#whitepaper" text="WHITE PAPER"
          />
      </div>
    </HeroDescriptionContainer>
  );
}

export default HeroDescription;
