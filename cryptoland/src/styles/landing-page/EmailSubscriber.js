import styled from 'styled-components'

export const EmailSubscriberContainer = styled.div`
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    text-align: center;
    padding: 50px 0;

    h1 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0.3%;

        @media (max-width: 400px) {
          font-size: 1.5em;
        }
    }

    p {
        font-size: 1.5rem;
        font-weight: 300;
        margin: .5% 0 1.5% 0;

        @media (max-width: 960px) {
          font-size: 1.2rem;
          margin-bottom: 20px;
        }

        @media (max-width: 400px) {
          font-size: 1em;
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

        @media (max-width: 960px) {
          width: 100%;
          flex-direction: column;
          align-items: center;
        }

        input {
            height: 60px;
            width: 40%;
            border: none;
            margin-right: 2%;
            font-size: 1.6rem;
            padding-left: 20px;
            outline: none;

            @media (max-width: 960px) {
              padding-left: 5%;
              width: 90%;
              height: 50px;
              font-size: .8rem;
              margin: 0;
            }
        }

        input::placeholder {
            font-size: 1.6rem;

            @media (max-width: 960px) {
              height: 60px;
              font-size: .8rem;
            }
        }
      }
    }
`
