import React, { useState, useEffect } from "react";
import { TickerContainer } from "../styles";

function Tick() {
  return (
    <TickerContainer>
      <h1>CURRENT MARKET VALUE:</h1>
      <p>Cryptoland (CRYPTO) </p>
      <h1>$84.60 usd</h1>
      <i class="fas fa-sort-up " />
      <p>$73.60 (+769%)</p>
    </TickerContainer>
  );
}

export default Tick;
