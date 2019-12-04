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

        @media (max-width: 1200px) {
            width: 35%;
            margin-top: 25%;
        }    

        @media (max-width: 650px) {
            width: 50%;
            margin-top: 40%;
        }  
    }

    h1 {
        margin-top: .5%;
        font-size: 4.3em;
        font-weight: 700;

        @media (max-width: 1200px) {
            font-size: 3.3em;
        }

        @media (max-width: 900px) {
            font-size: 2.8em;
        }

        @media (max-width: 750px) {
            font-size: 2.4em;
        }

        @media (max-width: 650px) {
            font-size: 2em;
            margin-top: 5%;
        }  

        @media (max-width: 550px) {
            font-size: 1.7em;
            margin-top: 5%;
        }  

        @media (max-width: 470px) {
            font-size: 1.3em;
            margin-top: 5%;
        }

        @media (max-width: 350px) {
            font-size: 1em;
            margin-top: 5%;
        }
    }

    p {
        margin-top: 1.5%;
        font-size: 1.6em;
        color: #01A76E;

        @media (max-width: 750px) {
            font-size: 1.5em;
        }

        @media (max-width: 650px) {
            font-size: 1.2em;
            margin-top: 4%;
        } 

        @media (max-width: 470px) {
            font-size: 0.8em;
            margin-top: 4%;
        }

        @media (max-width: 350px) {
            font-size: 0.7em;
            margin-top: 4%;
        }
    }
`