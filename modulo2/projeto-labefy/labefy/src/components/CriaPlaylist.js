import React from 'react'
import styled from 'styled-components';
import axios from 'axios';

const H2Styled = styled.h2`
margin: 15px;
`

const DivInputButton = styled.div`
margin: 15px;
input{
  width: 16rem;
}
`

const FakeButton = styled.span`
  margin: 5px;
  border: 0.5px solid black;
  border-radius: 5px;
  color: black;
  width: 6rem;
  height: 9rem;
  padding: 3px;
  background-color: #dfe73b;
  font-size: 13px;
:hover{
  cursor: pointer;
  background-color: #0c1c18;
  color: white
}
:active{
  background-color: #120907;
}
`

export default class App extends React.Component {
  state = {
      inputPlaylist: ""
  }
  
  onChangePlaylist = (event) =>{
      this.setState({inputPlaylist: event.target.value})
  }
  criaPlaylist = async () =>{
    try {  
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
      const headers = {
          Authorization: "azevedolv-silveira"
      };
      const body = {
          name: this.state.inputPlaylist
        }
      const response = await axios.post(url, body, {headers:{
        Authorization: "azevedolv-silveira"
    }})
    alert(`Brabo! A playlist ${this.state.inputPlaylist} foi criada e pode ser tocada quando quiser!`)  
    console.log(response)
    this.setState({ inputPlaylist: ""});
    } catch (err){
        alert(`Ih alá! Deu erro... tente novamente.`) 
        console.log(err.response)
        this.setState({ inputPlaylist: ""});
    }
  }
    render() {
  
      return (
        
        <div>
          <H2Styled>Viva sua playlist 🌻</H2Styled>
          <DivInputButton>
              <input
              type={'text'}
               placeholder='Nome da Playlist'
               value={this.state.inputPlaylist}
               onChange={this.onChangePlaylist}
                />
                <FakeButton onClick={this.criaPlaylist}>Criar</FakeButton>
          </DivInputButton>
        </div>
  
      )
    }
  }