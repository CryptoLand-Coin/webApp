import React from 'react';
// import axios from 'axios';

import { ButtonContainer, EmailSubscriberContainer } from '../styles';

export default class extends React.Component {
  state = {
    email: '',
    errorMessage: '',
    successMessage: ''
  };

  changeHandler = event => {
    event.preventDefault();

    const name = event.target.name;
    const value = event.target.value;


    // console.log(name, 'name');
    // console.log(value, 'value');


    this.setState({
      [name]: value
    });
  };

  submitHandler = event => {
    event.preventDefault();

    // console.log('clicked');


    // const config = {
    //   headers: {
    //     Accept: 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Request-Headers': 'authorization',
    //     'Access-Control-Allow-Methods': '*',
    //     'Content-Type': 'application/json'
    //   }
    // };

    // //protect this endpoint
    // axios
    //   .post(
    //     `https://crypto-movez.herokuapp.com/api/klaviyo/newsletter`,

    //     { subscriberEmail: this.state.subscriberEmail },
    //     config
    //   )
    //   .then(res => {
    //     let response = res;
    //     // console.log(response);
    //   })
    //   .catch(err => {
    //     let error = err;
    //     // console.log(error);
    //   });

    // setTimeout(() => {
    //   this.setState({
    //     ...this.state,
    //     subscriberEmail: '',
    //     successMessage:
    //       'An email was sent to your inbox, please verify you email address.'
    //   });
    // }, 1000);

    // setTimeout(() => {
    //   this.setState({
    //     ...this.state,
    //     successMessage: ''
    //   });
    // }, 10000);
  };

  render() {
    return (
      <EmailSubscriberContainer>
        <h1>Stay Informed</h1>
        <p>Subscribe to our newsletter and we will periodically send you updates and info about Cryptoland</p>
        <div>
          <form action="https://script.google.com/macros/s/AKfycbxZgUaIsyQOjKLCTGfQpJrwGAjIsdGQIScflZxdwkLhDksxp54/exec" method="post">
            <input
              name='email'
              type='email'
              required
              placeholder='Email address'
              value={this.state.email}
              onChange={this.changeHandler}
            />
            <ButtonContainer
              type='submit'
              width={'300px'}
              height={'80px'}
              textColor={'white'}
              backgroundColor={'#6eead0'}
              fontSize={'1.6rem'}
              fontWeight={'700'}
              hoverBackgroundColor={'#6eead000'}
              hoverBorder={'2px solid white'}
              hoverTextColor={'white'}
              m600width={'100%'}
              m600height={'66px'}
              m600fontSize={'1.3rem'}
            >
              SUBSCRIBE
            </ButtonContainer>
          </form>
        </div>
        {this.state.successMessage ? (
          <p style={{ color: '#03EC66' }}>{this.state.successMessage}</p>
        ) : this.state.errorMessage ? (
          <p style={{ color: '#FF6C6C' }}>{this.state.errorMessage}</p>
        ) : null}
      </EmailSubscriberContainer>
    );
  }
}
