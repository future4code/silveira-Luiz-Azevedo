import React from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { base_url } from '../constants/URLs';
import DetalhesPlaylist from './DetalhesPlaylist.js'


export default class App extends React.Component {
  state ={
      listaDePlaylists:[],
      tela: "lista",
      playlistId: ""
  }
  componentDidMount = () =>{
      this.mostraPlaylists()
  }
  mostraPlaylists = async () => {
      try{
          const url = `${base_url}/playlists`
          const headers= {
              headers: {
                  Authorization: 'azevedolv-silveira'
                }
            }
          const response = await axios.get(url, headers)
        console.log(response.data.result.list)
        this.setState({listaDePlaylists: response.data.result.list})
      } catch (err){
          console.log(err.reponse)
      }
  }

  trocaTelaDetalhes = (playlistId) => { 
    if(this.state.tela === "lista"){
      this.setState({ tela: "detalhes", playlistId: playlistId})
    }else{
      this.setState({ tela: "lista", playlistId: ""})
    }
  } 

    render() {
        const playlists = this.state.listaDePlaylists.map((playlist) =>{
            return (
            <div 
            key={playlist.id}
            onClick={() => this.trocaTelaDetalhes(playlist.id)}
            >
                <span>
                    <p>{playlist.name}</p>
                </span>
                <button>Deletar Playlist</button>
            </div>
            )
        })
        const nomePlaylist = this.state.listaDePlaylists.filter((playlist) =>{
            return <h2 key={playlist.id}>{playlist.nome}</h2>
        })
      return (        
        <div>
        {this.state.tela === "lista" ?
        (
        <div>
          <h2>Playlists Criadas</h2>
          {this.state.listaDePlaylists.length === 0 && <div>Não há playlists salvas...</div>}
          {playlists}
        </div>
        )
          : (<DetalhesPlaylist playlistId={this.state.playlistId} trocaTelaDetalhes={this.trocaTelaDetalhes} nomePlaylist={nomePlaylist}/>)
          }
        </div>
  
      )
    }
  }