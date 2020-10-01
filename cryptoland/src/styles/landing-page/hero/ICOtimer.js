import styled from "styled-components";

export const TimerContainer = styled.div`
  display: flex;
  width: 86%;
  justify-content: space-around;
  align-items: center;
  padding: 0 6%;

  @media (max-width: 500px) {
    margin-bottom: 10px;
  }

  div {
    text-align: center;
    width: ${(props) => (props.completed ? "100% " : "25%")};

    h1 {
      font-size: 4em !important;
      font-weight: 700;

      @media (max-width: 1080px) {
        font-size: 3em !important;
      }

      @media (max-width: 500px) {
        margin: 10px !important;
      }

      @media (max-width: 420px) {
        font-size: 2em !important;
        margin: 15px 0 5px 0 !important;
      }
    }

    p {
      color: grey;
      font-size: 1em;
      padding-top: 5%;

      @media (max-width: 375px) {
        font-size: 0.8em;
      }
    }
  }

  span {
    color: grey;
    font-size: 4em;
    display: flex;
    align-self: flex-start;
    padding: 1%;

    @media (max-width: 1080px) {
      font-size: 3em;
    }

    @media (max-width: 500px) {
      margin: 0 !important;
    }

    @media (max-width: 420px) {
      font-size: 2em !important;
      margin: 10px 0 0 0 !important;
    }
  }
`;
