import styled from "styled-components";

export const LandingPageHero = styled.div`
  background: url(/assets/Background_Image.png);
  height: 100%;
  width: 100%;
  padding: 150px 0 50px 0;
  background-repeat: no-repeat;
  background-size: cover;


  .hero-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    padding: 50px 0;

    @media (max-width: 960px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
    }

    @media (max-width: 500px) {
      padding: 20px 0;
    }
  }
`;

export const HeroDescriptionContainer = styled.div`
  width: 49.5%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    width: 100%;
    order: 2;
  }

  .interiorContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 5%;

    h1 {
      font-size: 2em;
      font-weight: 700;
      line-height: 1.1em;

      @media (max-width: 1280px) {
        font-size: 1.9em;
      }
    }

    p {
      font-size: 1em;
      margin-top: 0.6em;
      font-weight: 400;
      letter-spacing: 1px;
      line-height: 1.5em;
    }

    strong {
      font-size: 1em;
      font-weight: 900;
      letter-spacing: 1px;
      line-height: 1.5em;
    }

    ul {
      margin-top: 7%;
      font-size: 1.1em;

      div {
        display: flex;
        flex-direction: row;
        margin-bottom: 3.3%;
        display: flex;
        align-items: center;

        li {
          padding-left: 2%;
        }

        i {
          font-size: 1.6em;
          color: #55e2be;
          background: linear-gradient(to right, #6bdfc7 0%, #00eb9a 100%);
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }
      }
    }

    button {

      a {

        p {
          margin: 0;
        }
      }
    }
  }
`;

export const CryptoProgressContainer = styled.div`
  width: 49.5%;
  height: 100%;

  @media (max-width: 960px) {
    width: 80%;
    order: 1;
    margin-bottom: 50px;
  }

  @media (max-width: 500px) {
    width: 90%;
  }

  .progress-container {
    background: rgb(0, 0, 0, 0.6);
    width: 94%;
    border-radius: 5px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
      width: 100%;
    }

    .purchaseHeader {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      width: 92%;
      top: 5vh;
      height: 8vh;
      border-radius: 5px;
      background: rgba(0, 0, 0, 0.6);
      font-weight: 800;
      padding: 0 5%;

     p {
       font-size: 0.75em;
       width: 29%;

        @media (min-width: 1061px) and (max-width: 1300px) {
          width: 35%;
          font-size: 0.6em;
        }

        @media (min-width: 961px) and (max-width: 1060px) {
          width: 40%;
          font-size: 0.6em;
        }

        @media (max-width: 960px) {
          width: 40%;
        }

        @media (max-width: 550px) {
          font-size: 0.6em;
        }
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;

        p {
          font-size: 0.75em;
          padding-left: 10%;
        }

        img {
          width: 25%;
          height: auto;
        }

      }
    }

    h1 {
      text-align: center;
      margin: 10% 0 2% 0;
      font-size: 1.3em;
      font-weight: 600;

      @media (max-width: 720px) {
        margin: 15% 0 2% 0;
      }

      @media (max-width: 500px) {
        margin: 20% 0 2% 0;
      }
    }
  }
`;
