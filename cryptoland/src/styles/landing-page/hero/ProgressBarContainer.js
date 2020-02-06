import styled from 'styled-components'

export const ProgressBarContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .progressBar {
        height: 3vh;
        margin-top: 6%;
        background: linear-gradient(to right, #FFFFFF 0%, #00EB9A 50%, #EB0000 100%);
        width: 83%;
    }

    .progressContainer {
        height: auto;
        width: 83%;
        display: flex;
        justify-content: flex-end;

        .overlayProgressBar {
            height: 3.2vh;
            transform: translate(0, -3.1vh);
            background-color: black;
            width: ${props => props.percentageRemaining  ? props.percentageRemaining : '100%'};
        }
    }


    .staticBar {
        height: 1vh;
        background: linear-gradient(to right, #FFFFFF 0%, #00EB9A 50%, #EB0000 100%);
        width: 83%;
    }

    .startfinish {
        width: 83%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 0.7em;
    margin: 1% 0 2% 0;

    .sftext {
        color: grey;
    }

    h1 {
        margin: 0;
    }

        .coincount {
            display: flex;
            justify-content: center;
            align-items: center;

            .count {
                padding: 0 2%;
            }

            h1 {
                margin: 0 2px;

                @media (max-width: 500px) {
                  font-size: .6em;
                }
            }

            img {
                width: 20px;
                height: auto;

                @media (max-width: 500px) {
                  width: 12px;
                }
            }
        }
    }
`
