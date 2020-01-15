import styled from "styled-components";

export const LandingPageHero = styled.div`
  background: url(/assets/Background_Image.png);
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const HeroDescriptionContainer = styled.div`
  width: 49.5%;
  margin-top: 15vh;
  height: 70vh;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;

  .interiorContainer {
    width: 72%;
    display: flex;
    flex-direction: column;
    height: 86%;
    margin-top: 7%;
  }

  h1 {
    font-size: 2.6em;
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
  height: 70vh;
  border: 1px solid red;
`;
