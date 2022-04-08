import React, { Fragment } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';
import CriaPlaylist from './components/CriaPlaylist.js';
import ListaPLaylists from './components/ListaPlaylists.js';
const GlobalStyle = createGlobalStyle`
  * {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
  body {
    background: #004d53;
  }
`
const StyledDiv = styled.div`
display: flex;
flex-direction: column;
height: 100vh;

main {
  flex-grow: 1; //faz o main crescer e ocupar todo o espaço 
}
`
const PStyled = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 13px;
`

const FakeButton = styled.span`
  margin: 5px;
  border: 0.5px solid black;
  border-radius: 5px;
  color: black;
  width: 5.2rem;
  height: 1.6rem;
  padding: 2px;
  background-color: #dfe73b;
  font-size: 12px;
:hover{
  cursor: pointer;
  background-color: #0c1c18;
  color:white
}
:active{
  background-color: #120907;
}
`

const MainContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
/* background-color: lightslategray; */
/* width: 30rem;
height: 20rem; */
margin: auto;
margin-top: 5rem;

input:active{
  background-color: darkgray;
  color: whitesmoke
}
h2{
  text-align: center;
}
input {
  width: 10rem;
  height: 26px;
}
`

export default class App extends React.Component {
  state = {
    tela: 1
  }

  onClickTela = () => { //Se a tela for 1 vai pra tela 2; se a tela for 2 vai pra tela 1
    if (this.state.tela === 1) {
      const novaTela = this.state.tela + 1
      this.setState({ tela: novaTela })
      // console.log(this.state.tela)
    } else {
      const novaTela = this.state.tela - 1
      this.setState({ tela: novaTela })
      // console.log(this.state.tela)
    }
  }


  render() {

    return (
      <>
        <GlobalStyle />
        <StyledDiv>
          <main>
            <MainContainer>
              <FakeButton onClick={this.onClickTela}>Mudar de Tela</FakeButton>
              {this.state.tela === 1 ? <CriaPlaylist /> : <ListaPLaylists />}
            </MainContainer>
          </main>
          <footer>
            <PStyled>Todos os direitos reservados a Vitae.Company®</PStyled>
          </footer>
        </StyledDiv>
      </>
    )
  }
}