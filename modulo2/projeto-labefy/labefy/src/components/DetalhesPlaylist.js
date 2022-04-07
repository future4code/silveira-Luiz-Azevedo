import axios from 'axios'
import React from 'react'
import { base_url } from '../constants/URLs'

export default class DetalhesPlaylist extends React.Component {
    state ={
        musicasDaPlaylist: [],
        inputNomeMusica: '',
        inputNomeArtista:'',
        inputUrl: ''
    }

    mostrarMusicas = async () =>{
        try{
            const url = `${base_url}/${this.props.playlistId}/playlists/tracks`
            const headers = {
                headers: {
                    Authorization: 'azevedolv-silveira'
                  }
              }
              const response = await axios.get(url, headers)
              this.setState({musicasDaPlaylist: response.name})
        } catch (err) {
            alert('Ih alá! Deu erro... tente novamente.')
        }
    }

    onChangeNomeMusica = (event) =>{
        this.setState({inputNomeMusica: event.target.value})
    }
    onChangeNomeArtista = (event) =>{
        this.setState({inputNomeArtista: event.target.value})
    }
    onChangeUrl = (event) =>{
        this.setState({inputUrl: event.target.value})
    }




    addMusicas = async () =>{
        try{
            const url = `${base_url}/${this.props.playlistId}/playlists/tracks`
            const body = {
                name: this.state.inputNomeMusica,
                artist: this.state.inputNomeArtista,
                url: this.state.inputUrl
            }
            const headers = {
                headers: {
                    Authorization: 'azevedolv-silveira'
                  }
              }
              const response = await axios.post(url, headers, body)
              this.setState({musicasDaPlaylist: response.data})
        } catch (err) {
            alert('Ih alá! Deu erro... tente novamente.')
        }
        }
  render() {
    return (
      <div>
          {/* <h2>{this.props.nomePlaylist}</h2> */}
          <h2>Detalhes da Playlist</h2>
          <input
          placeholder={'Nome da música'}
          value={this.state.inputNomeMusica}
          onChange={this.onChangeNomeMusica}
          />
          <input
          placeholder={'Nome do artista'}
          value={this.state.inputNomeArtista}
          onChange={this.onChangeNomeArtista}
          />
          <input
          placeholder={'URL da música'}
          value={this.state.inputUrl}
          onChange={this.onChangeUrl}
          />
          <button onClick={this.addMusicas}>Adicionar música</button>
      </div>
    )
  }
}
