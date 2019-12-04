import styled from 'styled-components'

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 55vh;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        justify-content: space-around;
        font-size: 1.75em;
        padding: 4% 0;
        font-weight: 500;
    }

    p {
        padding: 2% 0;
        width: 100%;
        text-align: center;
        border-top: 1px solid white;
    }

`