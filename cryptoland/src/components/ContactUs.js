import React, { Component } from 'react';

import { ContactContainer } from '../styles';

class ContactUs extends Component {
  render() {
    return (
      <ContactContainer>
          <>
            <h1>Contact Us</h1>
            <p>Enter a question or leave feedback below</p>
          </>

        <form
          action='https://script.google.com/macros/s/AKfycbz9d18m-CVHk3tVa9m2fFGZNqK4bUKfGLTNFN1wPQ/exec'
          method='post'
        >
          <div>
            <input
              name='name'
              type='text'
              required
              placeholder='Name'
            />
            <input
              name='email'
              type='email'
              required
              placeholder='Email'
            />
            <select required name='topic'>
              <option value=''>Select a topic</option>
              <option value='About Cryptoland'>About Cryptoland</option>
              <option value='White Paper'>
                White Paper
              </option>
              <option value='Road Map'>
                Road Map
              </option>
              <option value="Payment Options">Payment Options</option>
              <option value='Issues Recieving Coins'>Issues Recieving Coins</option>
              <option value='All other questions'>All other questions</option>
            </select>
          </div>
          <div>
            <textarea
              name='message'
              required
              placeholder='Type your message...'
            />
          </div>
          <button>SUBMIT</button>
          <div style={{ display: 'none' }}>
            <input name='plan' type='text' required defaultValue='none' />
          </div>
        </form>
      </ContactContainer>
    );
  }
}

export default ContactUs
