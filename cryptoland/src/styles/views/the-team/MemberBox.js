import styled from 'styled-components'

export const MemberBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #000000;
  width: 100%;

  .member-image {
    width: 15%;
    padding-top: 20px;

    img {
      width: 200px;
    }
  }

  .member-main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 75%;

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
