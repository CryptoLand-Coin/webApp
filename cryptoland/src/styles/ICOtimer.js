import styled from 'styled-components'

export const TimerContainer = styled.div`
display: flex;
    width: 86%;
    justify-content: space-around;
    align-items: center;
    padding: 0 6%;

    div {

        text-align: center;
        width: 25%;

        h1 {
            font-size: 4em;
            font-weight: 700;
        }
    
        p {
            color: grey;
            font-size: 0.8em;
            padding-top: 5%;
        }
    }

    span {
        color: grey;
        font-size: 4em;
        display: flex;
        align-self: flex-start;
        padding: 1%;
    }

`