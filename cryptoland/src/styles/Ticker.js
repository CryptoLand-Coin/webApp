import styled from 'styled-components'

export const TickerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: rgb(0, 0, 0, 0.6);
    font-size: .8em;
    align-items: center;
    margin-top: 11vh;
    position: fixed;
    padding: 0.7% 0;
    box-shadow: 0px 0px 29px 0px rgba(63,235,154,.25);

    h1 {
        font-weight: 900;
        margin-left: 1%;
    }

    p {
        margin-left: 0.25%;
    }

    i {
        padding-left: 0.5%;
        transform: translate(0px, 25%);
        color: #01A76E;
    }

    @media (max-width: 600px) {
        flex-direction: column;
    }

    @media (max-width: 360px) {
        font-size: 1em;
    }

    p:first-child {
        margin-right: 2%;
    }

    p:last-child {
        color: #01A76E;
        font-weight: 700;
    }
`