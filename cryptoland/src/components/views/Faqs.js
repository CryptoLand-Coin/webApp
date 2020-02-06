import React from 'react'

import {
  FaqContainer,
  FaqQAContainer,
} from '../../styles';

import FaqQA from './FaqQA'

function Faq() {
  return (
    <FaqContainer>
        <>
          <h1>FAQ</h1>
        </>

      <FaqQAContainer>
        <FaqQA
          text={'What exchanges do you recommend I use?'}
          subText={'We recommend the following exchanges Bittrex, Binance and Poloniex for alt coins and a Coinbase account for the major coins for simplicity.'}
        />
        <FaqQA
          text={'How much money should I start trading with?'}
          subText={'Initial investments for CryptoMovez, we suggest starting with a minimum of $300 - $1500 and for CryptoCoach, we suggest starting with a minimum of $5,000 - $10,000. We suggest you continually invest amounts of money in proportion to the amount you would like to receive in gains. Consult with a money manager to determine the amount of investment that is right for you and your investment portfolio.'}
        />
        <FaqQA
          text={'How much should I be continually investing every day, week or month?'}
          subText={'We highly recommend you consult with a money manager to determine an investment budget for trading cryptocurrency. Any good investor will invest a portion of his or her income on an ongoing basis. Consult with an Advisor about the amount that is right for you and your risk tolerance. Gains are not guaranteed but continual long-term investment strategies tend to yield the best results.'}
        />
        <FaqQA
          text={'If I see a move with a high return potential, should I invest more in that particular trade?'}
          subText={'Hedge your bets. No matter how much the potential return is on a single trade, you are better off hedging your investments as opposed to putting all of your eggs in one basket. There is no substitute for a sound investment strategy, We suggest upgrading to a CryptoCoach membership to develop your investing strategy for cryptocurrency.'}
        />
        <FaqQA
          text={'How long before I see a return on Movez?'}
          subText={'Every trade is different. Typical ‘Take Profits’ targets take between 3-4 weeks but vary from trade to trade. Consider upgrading to the CryptoCoach program to receive analysis and details for every single trade.'}
        />
        <FaqQA
          text={'If I took a move and a new move is released, what should I do?'}
          subText={'Trades are independent of one another. If you have reached your investment budget threshold, you should wait until the first move hits a take profit to exit before allocating your gains to another trade. If you have remaining funds in your investment budget for trading, feel free to participate in the new move along with any trades before.'}
        />
      </FaqQAContainer>
    </FaqContainer>
  )

}

export default Faq
