import styled from 'styled-components'

export const LandingPageHero = styled.div`
    background: linear-gradient( rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65) ),url('/assets/Background_Image.jpg');
    height: 90vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    img {
        width: 15%;
        margin-top: 10%;
    }

    h1 {
        margin-top: .5%;
        font-size: 4.3em;
        font-weight: 700;
    }

    p {
        margin-top: 1.5%;
        font-size: 1.6em;
        color: #01A76E;
    }
`