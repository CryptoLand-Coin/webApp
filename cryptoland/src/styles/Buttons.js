import styled from 'styled-components'

export const BuyCryptoButton = styled.div`
    margin-top: 3.5%;
    border: 5px solid #01A76E;
    width: 16%;
    padding: 1% 0;
    text-align: center;
    border-radius: 5px;

    p {
        color: white;
        font-size: 1.7em;
        font-weight: 700;
    }
`

export const Button = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  color: ${props => props.textColor};
  background-color: ${props => props.backgroundColor};
  border: none;
  border-radius: 3px;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  cursor: pointer;
  transition: all .3s ease;
  outline: none;

  :hover {
    /* transform: scale(1.05); */
    background-color: ${props => props.hoverBackgroundColor};
    border: ${props => props.hoverBorder};
    color: ${props => props.hoverTextColor};
  }

  @media (max-width: 960px) {
    width: ${props => props.m960width};
    height: ${props => props.m960height};
    margin: ${props => props.m960margin};
    padding: ${props => props.m960padding};
    font-size: ${props => props.m960fontSize};
  }

  @media (max-width: 600px) {
    width: ${props => props.m600width};
    height: ${props => props.m600height};
    margin: ${props => props.m600margin};
    padding: ${props => props.m600padding};
    font-size: ${props => props.m600fontSize};

  @media (max-width: 400px) {
    width: ${props => props.m400width};
    height: ${props => props.m400height};
    margin: ${props => props.m400margin};
    padding: ${props => props.m400padding};
    font-size: ${props => props.m400fontSize};
  }
`