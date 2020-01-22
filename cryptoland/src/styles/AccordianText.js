import styled, { keyframes } from 'styled-components'

// ------- Keyframes --------
const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const AccordianTextContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.6em;
    flex-direction: column;
    opacity: 0;
    animation: 1s ${appear} forwards;
    animation-delay: .2s;

    p {
        width: 80%;
        margin-top: 3%;
        font-size: .8em;
    }

    @media (max-width: 700px) {
        font-size: 1.2em;

        p{
            width: 90%
        }
    }
`
