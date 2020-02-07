import styled from 'styled-components'

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: black;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-size: 1.3em;
        padding: 4% 0;
    }

    p {
        padding: 2% 0;
        width: 100%;
        text-align: center;

        @media (max-width: 500px) {
            font-size: 0.8em
        }
    }

    a {
        text-decoration: none;
        color: white;
        cursor: pointer;
        padding: 15px 0;

        &:hover {
          background: -webkit-linear-gradient(left,#00eb9a, #6bdfc7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @media (max-width: 500px) {
            font-size: 0.8em
        }
    }

`
