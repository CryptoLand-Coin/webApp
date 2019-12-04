import styled from 'styled-components'

export const AccordianSectionContainer = styled.div`
  height: auto;
`
export const AcordianBarContainer = styled.div`
 display: flex;
 flex-direction: row;
 align-items: center;
 justify-content: center;
 height: 80px;
 background: ${props => props.color || 'black'};
 width: 100%;
 text-align: center;

 @media (max-width: 960px) {
   height: 60px;
 }

 @media (max-width: 600px) {
   height: 46px;
 }

 div {
   width: 45%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   color: white;

   @media (max-width: 1440px) {
     width: 70%;
   }

   @media (max-width: 1200px) {
    width: 50%;
  }

   @media (max-width: 960px) {
     width: 50%;
     padding-right: 50px;
   }

   @media (max-width: 550px) {
    width: 75%;
    padding-right: 50px;
  }

   p {
    color: #01A76E;
     font-size: 1.75rem;
     font-weight: 500;
     padding-left: 5%;
     width: 100%;

     @media (max-width: 500px) {
       font-size: 1.5rem
     }

     @media (max-width: 350px) {
       font-size: 1.3rem
     }
   }
 }
`