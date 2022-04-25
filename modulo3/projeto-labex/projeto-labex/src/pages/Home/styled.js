import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`
export const Body = styled.div`
display: flex;
flex-direction: column;
header{
  border: 1px solid black;
  height: 80px;
  display: flex;
  justify-content: space-between;
  button{
      height: 30px;
      }
}
main{
  flex-grow: 1;
  border: 1px solid black;
}
`
export const HeaderButtonDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
button{
    margin-right: 1rem;
}
p{
    margin-left: 1rem;
}
`
export const MainContainer = styled.div`
display: grid;
grid-template-columns: 0.5fr 1fr 0.5fr;
`
export const TripConatainer = styled.div`
grid-column: 2;
display: flex;
border: 1px solid black;
flex-direction: column;
align-items: center;
scroll-behavior: smooth;
`
export const SubsButtonContainer = styled.div`
grid-column: 3;
border: 1px solid black;
display: flex;
justify-content: center;
height: 100vh;
button{
    height: 30px;
    margin-top: 3%;
    padding: 3px;
}
`