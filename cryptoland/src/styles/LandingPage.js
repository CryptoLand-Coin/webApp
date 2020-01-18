import styled from "styled-components";

export const LandingPageHero = styled.div`
  background: url(/assets/Background_Image.png);
  height: 100%;
  width: 100%;
  padding: 50px 0;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    height: 100%;
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
    width: 72%;
    display: flex;
    flex-direction: column;
    height: 86%;
    margin-top: 7%;
  }

  h1 {
    font-size: 2em;
    font-weight: 700;
    line-height: 1.1em;
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
      margin-bottom: 3.3%;
      display: flex;
      align-items: center;
    }

    li {
      padding-left: 2%;
    }

    i {
      font-size: 1.7em;
      color: #55e2be;
      background: linear-gradient(to right, #6bdfc7 0%, #00eb9a 100%);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
    div {
      display: flex;
      flex-direction: row;
    }
  }
`;

export const CryptoProgressContainer = styled.div`
  width: 49.5%;
  margin-top: 15vh;
  height: 100%;
  padding: 1%;

  @media (max-width: 960px) {
    order: 1;
  }

  .interiorContainer {
    background: rgb(0, 0, 0, 0.6);
    width: 94%;
    margin-top: 2%;
    border-radius: 5px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    font-size: 0.75em;
    font-weight: 800;
    padding: 0 5%;

   p {
      width: 29%;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;

      p {
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
    margin-top: 10%;
    font-size: 1.3em;
    font-weight: 600;
  }
`;
