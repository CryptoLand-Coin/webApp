import styled from 'styled-components'

export const RoadMapContainer = styled.div`
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 2em;
    flex-direction: column;

    div:first-child {
        margin-top: 2.5%;
        width: 75%;
        text-align: left;

        @media (max-width: 700px) {
            width: 95%;
            text-align: center;
        }

        div {
            display: flex;
            width: 100%;
            justify-content: space-between;
            margin: 2% 0;

            @media (max-width: 700px) {
                margin: 5%;
              ul {
                  width: 100%;
              }  
            }
        }

        h3 {
            font-size: 1.5em;
            text-align: center;
            @media (max-width: 700px) {
                font-size: 1.2em;
                margin: 5% 0;
            }
        }
    }

    @media (max-width: 700px) {
        font-size: 1.2em;
    }
`