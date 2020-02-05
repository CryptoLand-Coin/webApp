import React from "react";
import { Link } from 'react-router-dom'

import { HeroDescriptionContainer } from "../../../styles";
import { Button } from "../../../components";


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
          <Button
           noDecoration
           fontSize="1em"
           fontWeight="900"
           letterSpacing="1px"
           textColor="#55E2BE"
           width="45%"
           padding="1.5% 0"
           margin="1.5% 0 0 0"
           backgroundColor="white"
          >
              <Link to={'/whitepaper'}>
                  <p>WHITE PAPER</p>
              </Link>
          </Button>
      </div>
    </HeroDescriptionContainer>
  );
}

export default HeroDescription;
