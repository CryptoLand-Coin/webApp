import React from "react";
// import { Link } from 'react-router-dom'

import { HeroDescriptionContainer } from "../../../styles";
// import { Button } from "../../../components";


function HeroDescription() {
  return (
    <HeroDescriptionContainer>
      <div className="interiorContainer">
          <h1>Smarter, faster, intuitive cryptocurrency
            designed for every-day use. </h1>
          <p>
            A thriving decentralized global currency coupled with a revolutionary social platform.
          </p>
          <p>
            In CryptoLand, members interact with content they love.
          </p>
          <strong>Then they get paid for it.</strong>
          <ul>
            <div>
              <i className="far fa-check-circle" />
              <li>Invest in a cryptocurrency that has real utility </li>
            </div>
            <div>
              <i className="far fa-check-circle" />
              <li>Explore the world’s first crypto-backed social media network</li>
            </div>
            <div>
              <i className="far fa-check-circle" />
              <li>Capitalize on your data, while solidifying your financial future</li>
            </div>
          </ul>
          {/*<Button
           width='75%'
           noDecoration
           fontSize="1em"
           fontWeight="900"
           textGradient
           hoverScale
           padding="10px 0"
           margin="1.5% 0 0 0"
           backgroundColor="white"
           m960width='100%'
           m960margin="20px 0 0 0"
          >
              <Link to={'/whitepaper'}>WHITE PAPER</Link>
          </Button>*/}
      </div>
    </HeroDescriptionContainer>
  );
}

export default HeroDescription;
