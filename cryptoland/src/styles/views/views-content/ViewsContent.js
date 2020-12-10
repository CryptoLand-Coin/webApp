import styled from "styled-components";

export const ViewsContentContainer = styled.div`
  height: auto;
  padding-top: ${(props) => (props.width > 1200 ? "140px" : "125px")};
  padding-bottom: ${(props) => (props.whitepaper ? "0px" : "100px")};
  background-color: white;

  .page-title {
    padding: 100px 0 0 5%;

    h1 {
      color: #000000;
      font-size: 4rem;
      font-weight: 800;

      @media (max-width: 450px) {
        font-size: 3rem;
      }
    }
  }

  .page-body {
    padding: 75px 7% 0 7%;
    line-height: 2;

    p {
      color: #808080;
      font-size: 1rem;
      margin: 0 0 50px 0;
    }
  }

  .paper-container {
    height: 100vh;
  }
`;
