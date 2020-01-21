import React from 'react'
import { RoadMapContainer } from '../styles'
import AcordianMenu from './Accordian/AccordianMenu'

function RoadMap() {
  return (
    <>
      <AcordianMenu text={'Road Map'}>
        <RoadMapContainer>
          <div className='title'>
            <h1>CRYPTO ICO ROAD MAP</h1>
            <p>ICO Investment Strategies</p>
          </div>

          <div className='offering'>
            <div>
              <p>Public Offering Date</p>
              <p>August 1, 2020</p>
            </div>
            <div>
              <p>Minimum Coin Valuation</p>
              <p>$80</p>
            </div>
          </div>

          <div className='roadmap-container'>
            <div className='section'>
              <div className='section-title'>
                <p>ICO Date</p>
              </div>
              <div id='first' className='section-content'>
                <p>January 20, 2020</p>
                <p>January 20, 2020</p>
                <p>January 20, 2020</p>
                <p>January 20, 2020</p>
              </div>
            </div>

            <div className='section'>
              <div className='section-title'>
                <p>Lock Up Period</p>
              </div>
              <div className='section-content'>
                <p>None</p>
                <p>3 months</p>
                <p>6 months</p>
                <p>9 months</p>
              </div>
            </div>

            <div className='section'>
              <div className='section-title'>
                <p>Coin Price</p>
              </div>
              <div className='section-content'>
                <p>$80</p>
                <p>$75</p>
                <p>$70</p>
                <p>$65</p>
              </div>
            </div>

            <div className='section'>
              <div className='section-title'>
                <p>ICO Discount</p>
              </div>
              <div className='section-content'>
                <p>0.00%</p>
                <p>6.25%</p>
                <p>12.50%</p>
                <p>18.75%</p>
              </div>
            </div>

            <div className='section'>
              <div className='section-title'>
                <p>Public Offering</p>
              </div>
              <div id='last' className='section-content'>
                <p>August 1, 2020</p>
                <p>November 1, 2020</p>
                <p>Februaru 1, 2021</p>
                <p>May 1, 2020</p>
              </div>
            </div>

          </div>

          <div className='milestones-container'>
            <div className='milestone-title'>
              <h1>Additional Project Milestones</h1>
            </div>
            <div className='milestone'>
              <p>Global Exchange Listing</p>
              <p>July 2020</p>
            </div>

            <div className='milestone'>
              <p>Cryptoland Vault Application Completion</p>
              <p>July 2020</p>
            </div>

            <div className='milestone'>
              <p>Cryptoland Mobile Application Completion</p>
              <p>January 2021</p>
            </div>
          </div>
        </RoadMapContainer>
      </AcordianMenu>
    </>
  );
}

export default RoadMap
