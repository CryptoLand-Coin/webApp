import styled from 'styled-components'

export const RoadMapContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: .8em;

  @media (max-width: 820px) {
    width: 90%;
    font-size: .7em;
  }

  @media (max-width: 500px) {
    width: 90%;
    font-size: .6em;
  }

  @media (max-width: 415px) {
    width: 95%;
    font-size: .4em;
  }

  @media (max-width: 321px) {
    width: 100%;
  }

  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    margin: 50px 0;

    h1 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 20px;

      @media (max-width: 700px) {
        font-size: 1rem;
      }
    }

    p {
      font-style: italic;
    }
  }

  .offering {
    width: 100%
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 50px;

    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      p {
        width: 100%;
        margin: 0 0 20px 0;
        text-align: center;
      }
    }
  }

  .roadmap-container {
    width: 100%
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 50px;

    .section {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      .section-title {
        width: 100%;
        text-decoration: underline;
        margin: 0 0 20px 0;
        text-align: center;

        p {
          width: 100%;
          margin: 0;
        }
      }

      .section-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;

        p {
          width: 100%;
          margin: 0;
        }
      }
    }
  }

  .milestones-container {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-bottom: 50px;

    @media (max-width: 1200px) {
      width: 100%;
    }

    .milestone-title {
      margin-bottom: 20px;

      h1 {
        font-size: 2rem;
        font-weight: 700;
        text-align: center;

        @media (max-width: 700px) {
          font-size: 1rem;
        }
      }
    }

    .milestone {
      display: flex;
      flex-direction: row;
      justify-conent: space-between;

      p {
        width: 100%;
        margin: 0 0 10px 0;
        &:first-child {
          text-align: left;
        }

        &:last-child {
          width: 30%;
          text-align: right;
        }
      }
    }
  }
`
