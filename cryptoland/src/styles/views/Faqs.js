import styled from 'styled-components'

export const FaqContainer = styled.div`
    padding-top: 22vh;
    height: auto;
    width: 100%;

    @media (max-width: 960px) {
      margin: 0;
      padding-top: 10vh;
    }

    h1 {
        font-size: 4.5rem;
        color: #01A76E;
        margin: 0;
        text-align: center;

        @media (max-width: 960px) {
          font-size: 2.5rem;
        }

        @media (max-width: 400px) {
          font-size: 1.6rem;
        }
    }

    p {
        font-size: 1.9rem;
        font-weight: 300;
        margin: 0 0 50px 0;

        @media (max-width: 960px) {
          color: white;
          font-size: 1.3rem;
        }

        @media (max-width: 400px) {
          font-size: 1rem;
        }
    }

    i {
        color: #A9B0BB;

        @media (max-width: 960px) {
          color: #424853;
        }

        @media (max-width: 400px) {
          font-size: 1.4rem;
        }
     }

     div {
         margin: 0;

         p {
             margin: 0;
         }
     }
`

export const FaqQAContainer = styled.div`
  margin-top: 1.5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const FaqQATextContainer = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(169, 176, 187, 0.5);
  padding: .5% 0;

  @media (max-width: 1480px) {
    width: 75%;
  }

  @media (max-width: 1140px) {
    width: 90%;
  }

  h6 {
    font-size: 1.6rem;
    font-weight: 400;
    color: #A9B0BB;
    margin: 10px 0;
    text-align: left;

    @media (max-width: 1370px) {
      font-size: 1.3rem;
    }

    @media (max-width: 960px) {
      margin: 15px 0;
      font-size: 1.1rem;
    }

    @media (max-width: 400px) {
      font-size: 1rem;
    }
  }

  p {
    margin: 10px 0 !important;
    padding-left: 4%;
    font-size: 1.5rem;
    text-align: left;
    font-weight: 400;

    @media (max-width: 1370px) {
      font-size: 1.2rem;
    }

    @media (max-width: 960px) {
      margin: 15px 0 !important;
      font-size: 1rem;
      color: #424853;
    }

    @media (max-width: 400px) {
      font-size: .9rem;
    }
  }
`
