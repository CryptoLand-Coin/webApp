import styled from 'styled-components'

export const MemberBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid #000000;
  width: 100%;

  @media (max-width: 960px) {
    flex-direction: column;
  }

  .member-image {
    width: 17.5%;
    padding-top: 20px;

    @media (max-width: 960px) {
      width: 100%;
    }

    img {
      width: 100%;

      @media (max-width: 960px) {
        width: 60%;
      }
    }
  }

  .member-main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 77.5%;

    @media (max-width: 960px) {
      width: 100%;
    }

    .member-name {
      margin-bottom: 50px;

      h1 {
        color: #000000;
        font-size: 3rem;
        font-weight: 800;
        padding: 0;
        margin-top: -10px;

        @media (max-width: 450px) {
          font-size: 2rem;
        }
      }
    }
  }
`
