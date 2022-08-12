import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: 'Montserrat';
}
`

export const EstructureDiv = styled.div`
display: flex;
flex-direction: row;
height: 39.06rem;
background: #6BEFA3;
`

export const LoteryDiv = styled.div`
   grid-column: 1;
    display:flex;
    flex-direction: column;
`


export const NumberDiv = styled.div`
border-radius: 260px 0 0 260px;
background-color: #d3d3d3;
width: 100rem;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-left: 20rem;
`
export const ContainerMS = styled.div`
    position: absolute;
    left: 0%;
    right: 61.69%;
    top: 0%;
    bottom: 0%;
    background: #6BEFA3;
`
export const MainContainerU = styled.div`
    background: #C0C0C0 ;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    
`


export const NameLoteria = styled.p`
    position: absolute;
    left: 11.11%;
    right: 53.57%;
    top: 48.43%;
    bottom: 48.52%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 37px;
    color: #FFFFFF;
`

export const Concurso = styled.div`
        
    position: absolute;
    left: 6%;
    right: 84.83%;
    top: 86.76%;
    bottom: 11.84%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.135em;
    color: #FFFFFF;
`
export const Data = styled.div`
    position: absolute;
    left: 6%;
    right: 77.69%;
    top: 89.49%;
    bottom: 8.59%;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
`



export const Ball = styled.div`
    /* position: absolute; */
    left: 39.97%;
    right: 53.08%;
    top: 44.97%;
    bottom: 44.97%;
 /* width: 0px;
 he: 0px; */
    border-radius: 100%;
    background: #FFFFFF;
`

export const NumberInsideTheBall = styled.p`
     /* position: absolute; */
    left: 42.23%;
    right: 55.51%;
    top: 48.54%;
    bottom: 48.42%;
padding: 10px;
    
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;
    /* identical to box height */
    color: #333333; 
`