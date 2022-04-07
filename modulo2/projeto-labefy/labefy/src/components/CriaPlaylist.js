import React from 'react'
import styled from 'styled-components';
import axios from 'axios';


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
          <h2>Crie sua Playlist</h2>
          <div>
              <input
              type={'text'}
               placeholder='Nome da Playlist'
               value={this.state.inputPlaylist}
               onChange={this.onChangePlaylist}
                />
                <button onClick={this.criaPlaylist}>Criar Playlist</button>
          </div>
        </div>
  
      )
    }
  }