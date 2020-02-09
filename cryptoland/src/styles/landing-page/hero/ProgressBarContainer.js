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
        transform: translate(0,-3.1vh);
        overflow-x: hidden;

        .overlayProgressBar {
            height: 3.2vh;
            transform: translate(${props => props.percentageRemaining  ? `${props.percentageRemaining}, 0` : '0%, 0'});
            background-color: black;
            width: 100%;
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
      margin: 0 0 2% 0;

    .sftext {
        color: grey;
    }

    h1 {
        margin: 20px 0 !important;
    }

        .coincount {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            font-size: 1rem;

            @media (max-width: 500px) {
              font-size: .8rem;
            }

            div {
              display: flex;
              flex-direction: row;
              align-items: center;
              .count {
                  padding: 0 0 0 5px;
              }

              h1 {
                  margin: 2px 0 2px 2px !important;
              }
            }

            .capital {
              margin: 5px 0 0 0 !important;
              font-size: 1rem;

              @media (max-width: 500px) {
                font-size: .8rem;
              }
            }

            img {
                width: 20px;
                height: auto;

                @media (max-width: 500px) {
                  width: 17px;
                }
            }
        }
    }
`
