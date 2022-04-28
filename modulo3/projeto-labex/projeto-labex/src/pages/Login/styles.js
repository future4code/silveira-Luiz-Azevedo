import styled from 'styled-components'
import background from '../../imgs/background.gif'
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
background-image: url(${background});
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
header{
  height: 80px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(46,139,87, 0.01);
      img{
        object-fit: fill;
        width: 5rem;
        height: 5rem;
        cursor: pointer;
      }
}
main{
  flex-grow: 1;
}
`
export const MainContainer = styled.div`
display: flex;
flex-direction: column;
height: 10;
`