import styled from 'styled-components'

export const NavigationContainer = styled.div`
    width: 100%;
    height: 11vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 99;
    background: rgba(0,0,0,0.75);


    img {
        width: 11%;
        height: auto;
        margin-left: 4%;
    }

    div {
        width: 48.5%;
        justify-content: space-between;
        display: flex;
        margin-right: 4%;
    }
`
