import React from 'react'
import { AccordianSectionContainer, RoadMapContainer } from '../styles'
import AcordianMenu from './Accordian/AccordianMenu'

export default class extends React.Component {
    state ={
      isShowing: false
    }
  
    clickHandler = () => {
      this.setState({ isShowing: !this.state.isShowing });
    };
  
    render() {
      return (
        <AccordianSectionContainer>
          <AcordianMenu
            clickHandler={this.clickHandler}
            text={'Road Map'}
            isShowing={this.state.isShowing}
          />
          {this.state.isShowing && (
            <RoadMapContainer>

              <div>
                <div>
                  <ul>Public Offering Date</ul>
                  <ul>Minimum Coin Valuation</ul>
                </div>

                <div>
                  <ul>December 1, 2019</ul>
                  <ul>$0.35</ul>
                </div>
                
  
                <div>
                  <ul>January 1, 2020</ul>
                  <ul>$0.45</ul>
                </div>

                <div>
                  <ul>February 1, 202</ul>
                  <ul>$0.55</ul>
                </div>

                <div>
                  <ul>March 1, 2020</ul>
                  <ul>$0.65</ul>
                </div>
                
                <h3>Additional Project Milestones</h3> 

                <div>
                  <ul>Global Exchange Listing</ul>
                  <ul>May 2020</ul>
                </div>

                <div>
                  <ul>CRYPTOLAND Vault Application Completion</ul>
                  <ul>March 2020</ul>
                </div>

                <div>
                  <ul>CRYPTOLAND Mobile Application Completion</ul>
                  <ul>June 2020</ul>
                </div>
                
              </div>
            </RoadMapContainer>
          )}
        </AccordianSectionContainer>
      );
    }
  }