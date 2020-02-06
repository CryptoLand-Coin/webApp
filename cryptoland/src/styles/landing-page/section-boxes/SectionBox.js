import styled from 'styled-components'

export const SectionContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  color: ${props => props.textColor};
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0;
  align-items: ${props => props.align === 'left' ? 'flex-start' : props.align === 'right' ? 'flex-end' : 'flex-start'};

  @media (max-width: 900px) {
    padding: 0;
    align-items: center;
  }

  .box-container {
    width: 45%;
    padding: 200px 100px;

    @media (max-width: 900px) {
      width: 90%;
      padding: 150px 0;
    }

    .box-title {
      width: 100%;

      h1 {
        font-size: 3rem;
        font-weight: 900;

        @media (max-width: 900px) {
          font-size: 2.5rem;
        }

        @media (max-width: 425px) {
          font-size: 1.6rem;
        }
      }

      p {
        font-size: 1.6rem;
        font-weight: 500;

        @media (max-width: 425px) {
          font-size: 1.2rem;
        }
      }
    }

    .box-body {
      width: 100%;
      padding-top: 50px;

      p {
        margin-bottom: 50px;

        @media (max-width: 900px) {
          margin-bottom: 30px;
        }
      }
    }

    .buttons {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;

      @media (max-width: 500px) {
        justify-content: space-between;
      }

      a {

        @media (max-width: 960px) {
          font-size: 1rem;
        }

        @media (max-width: 600px) {
          font-size: .8rem;
        }
      }
    }
  }
`
