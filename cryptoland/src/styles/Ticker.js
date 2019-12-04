import styled from 'styled-components'

export const TickerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    background: rgb(0, 0, 0, 0.2);
    font-size: 1.1em;
    align-items: center;

    p:first-child {
        margin-right: 2%;
    }

    i {
        color: #01A76E;
        transform: translate(0px, 9px);
    }

    p:last-child {
        color: #01A76E;
        font-weight: 700;
    }
`