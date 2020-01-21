import styled from 'styled-components'

export const ContactContainer = styled.div`
    padding-top: 22vh;
    height: 750px;
    text-align: center;

    @media (max-width: 960px) {
      margin-top: 0;
      padding-top: 10vh;
    }

    h1 {
        font-size: 4.5em;
        color: #01A76E;
        margin: 0;

        @media (max-width: 960px) {
          margin-top: 50px !important;
        }

        @media (max-width: 600px) {
          font-size: 2.5rem;
        }

        @media (max-width: 400px) {
          font-size: 1.6rem;
        }
    }

    p {
        font-size: 1.9em;
        font-weight: 300;
        margin: 0;

        @media (max-width: 960px) {
          color: white;
        }

        @media (max-width: 600px) {
          font-size: 1.3rem;
        }

        @media (max-width: 400px) {
          font-size: 1rem;
        }
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 3.5%;


      div:first-child {
        width: 42%;

        
      input {
        height: 80px;
        width: 100%;
        border: none;
        font-size: 1.6em;
        border-radius: 10px;
        margin-bottom: 2.5%;
        text-indent: 2%;
      }

        @media (max-width: 1200px) {
          width: 46%;
        }

        @media (max-width: 1100px) {
          width: 50%;
        }

        @media (max-width: 1000px) {
          width: 55%;
        }

        @media (max-width: 960px) {
          width: 80%;
        }

        @media (max-width: 500px) {
          width: 90%;
        }

        select {
          color: #6d6d6d;
          width: 100%;
          height: 60px;
          margin-bottom: 50px;
          font-size: 1.6em;
          font-family: Roboto;
          font-weight: 300;
          border: none;
          outline: none;
          text-indent: 8px;
          border-radius: 10px;
        }

      }

      div:nth-child(2) {
        width: 42%;

        @media (max-width: 1200px) {
          width: 46%;
        }

        @media (max-width: 1100px) {
          width: 50%;
        }

        @media (max-width: 1000px) {
          width: 55%;
        }

        @media (max-width: 960px) {
          width: 80%;
        }

        @media (max-width: 500px) {
          width: 90%;
        }

        textarea {
          width: 100%;
          height: 60px;
          border: none;
          font-size: 1.8em;
          font-family: Roboto;
          font-weight: 300;
          outline: none;
          padding: 1% 0;
          text-indent: 10px;
          border-radius: 10px;
        }
      }

        button {
          width: 600px;
          height: 80px;
          margin: 7% 0 0 0;
          color: white;
          background-color: #01A76E;
          border: none;
          border-radius: 5px;
          font-size: 1.6em;
          font-weight: 700;

          @media (max-width: 960px) {
            width: 80%;
            height: 70px;
          }

          @media (max-width: 500px) {
            width: 90%;
            height: 60px;
            margin: 100px 0 0 0;
          }
        }
    }
`
