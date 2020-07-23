import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.margin};
  padding: ${props => props.padding};
  color: ${props => props.textColor};
  background-color: ${props => props.backgroundColor};
  background: ${props => props.noBackground ? "none" : props.background === 'green' ? '-webkit-linear-gradient(left,#00eb9a 0%, #6bdfc7 80%)' : props.background};
  border: ${props => props.border ? props.border : 'none'}
  border-radius: 3px;
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  cursor: pointer;
  transition: all .3s ease;
  outline: none;
  letter-spacing: ${props => props.letterSpacing};

  /* landing page hover effect */
  &:hover {
    transform: scale(${props => props.hoverScale ? '1.05' : '1'});
  }

  p {
    text-decoration: ${props => props.noDecoration && "none"};
    color: ${props => props.textColor};
    background: ${props => props.textGradient ? '-webkit-linear-gradient(left,#00eb9a, #6bdfc7)' : 'none'};
    -webkit-background-clip: ${props => props.textGradient ? 'text' : 'none'};
    -webkit-text-fill-color: ${props => props.textGradient ? 'transparent' : 'none'};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};
    padding: ${props => props.pPadding}
  }

  a {
    text-decoration: ${props => props.noDecoration && "none"};
    color: ${props => props.textColor};
    background: ${props => props.textGradient ? '-webkit-linear-gradient(left,#00eb9a, #6bdfc7)' : 'none'};
    -webkit-background-clip: ${props => props.textGradient ? 'text' : 'none'};
    -webkit-text-fill-color: ${props => props.textGradient ? 'transparent' : 'none'};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight};

    p {
      margin: 0;
      font-size: ${props => props.fontSize};
      font-weight: ${props => props.fontWeight};
    }
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

  :hover {
    /* transform: scale(1.05); */
    background-color: ${props => props.hoverBackgroundColor};
    border: ${props => props.hoverBorder};
    color: ${props => props.hoverTextColor};
  }
`
