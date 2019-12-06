import styled from 'styled-components'

export const AccordianTextContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 1.6em;
    flex-direction: column;

    p {
        width: 75%;
        margin-top: 3%;
    }

    @media (max-width: 700px) {
        font-size: 1.2em;

        p{
            width: 90%
        }
    }
`