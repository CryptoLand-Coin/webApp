import styled from 'styled-components'

export const EmailSubscriberContainer = styled.div`
    height: 380px;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    text-align: center;

    @media (max-width: 960px) {
      padding: 0 20px;
    }

    h1 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0.3%;
    }

    p {
        font-size: 1.5rem;
        font-weight: 300;
        margin: .5% 0 1.5% 0;

        @media (max-width: 960px) {
          font-size: 1.2rem;
          margin-bottom: 20px;
        }
    }

    div {
      width: 100%;

      form{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-content: center;
        width: 100%;

        @media (max-width: 600px) {
          flex-direction: column;
        }

        input {
            height: 80px;
            width: 600px;
            border: none;
            margin-right: 2%;
            font-size: 1.6rem;
            padding-left: 20px;

            @media (max-width: 600px) {
              width: 95%;
              height: 66px;
              margin: 0 0 20px 0;
              font-size: .8rem;
            }
        }

        input::placeholder {
            font-size: 1.6rem;

            @media (max-width: 600px) {
              height: 60px;
              font-size: .8rem;
            }
        }
      }
    }
`
