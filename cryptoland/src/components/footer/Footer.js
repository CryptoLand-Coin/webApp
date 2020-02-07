import React from 'react'
import { FooterContainer } from '../../styles'

function Footer() {
    return(
        <FooterContainer>
            <div>
                <a href='/contactus' >Contact Us</a>
                <a href='/faqs' >FAQ's</a>
                <a href='/privacypolicy' >Privacy Policy</a>
                <a href='/termsandconditions' >Terms & Conditions</a>
            </div>

            <p>All rights reserverd. Copyright © CryptoLand 2020</p>
        </FooterContainer>
    )
}

export default Footer
