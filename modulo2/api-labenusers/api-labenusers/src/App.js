import React from 'react'
import styled from 'styled-components';
import axios from 'axios';
import Tela1 from './components/Tela1.js';
import Tela2 from './components/Tela2.js';



export default class App extends React.Component {
  state = {
    tela: 1
  }

  onClickTela = () => {
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
      <div>
        <button onClick={this.onClickTela}>Mudar de Tela</button>
        {this.state.tela === 1 ? <Tela1 /> : <Tela2 />}
      </div>
    )
  }
}
