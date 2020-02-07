import styled from 'styled-components'

export const EmailSubscriberContainer = styled.div`
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    text-align: center;
    padding: 50px 20px;

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
            /* height: 60px; */
            width: 40%;
            border: none;
            margin-right: 2%;
            font-size: 1.2rem;
            padding: 10px 0 10px 20px;
            outline: none;

            @media (max-width: 960px) {
              width: 85%;
              font-size: 1rem;
              margin: 0;
            }
        }

        input::placeholder {
            font-size: 1.2rem;

            @media (max-width: 960px) {
              font-size: .8rem;
            }
        }
      }
    }
`
