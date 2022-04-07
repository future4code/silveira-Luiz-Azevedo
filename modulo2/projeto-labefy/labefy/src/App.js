import React, { Fragment } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';
import CriaPlaylist from './components/CriaPlaylist.js';
import ListaPLaylists from './components/ListaPlaylists.js';
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: whitesmoke;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    /* background-color: aqua; */
  }
`;
const MainContainer = styled.div`
border: 2px solid black;
border-radius: 5px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
/* background-color: lightslategray; */
width: 300px;
height: 40%;
margin-top: 100px;
margin-left: 40%;
button{
  margin: 5px;
  border-style: groove;
  border-radius: 3px;
  color: black;
  /* background-color: darkblue; */
}
button:hover{
  cursor: pointer;
  background-color: darkgray;
}
input:active{
  background-color: darkgray;
  color: whitesmoke
}
`

export default class App extends React.Component {
  state = {
    tela: 1
  }

  onClickTela = () => { //Se a tela for 1 vai pra tela 2; se a tela for 2 vai pra tela 1
    if(this.state.tela === 1){
      const novaTela = this.state.tela + 1
      this.setState({ tela: novaTela})
      // console.log(this.state.tela)
    }else{
      const novaTela = this.state.tela - 1
      this.setState({ tela: novaTela})
      // console.log(this.state.tela)
    }
  } 


  render() {

    return (
      <Fragment>
      <GlobalStyle/>
      <MainContainer>
        <button onClick={this.onClickTela}>Mudar de Tela</button>
        {this.state.tela === 1 ? <CriaPlaylist /> : <ListaPLaylists />}
      </MainContainer>
      </Fragment>

    )
  }
}