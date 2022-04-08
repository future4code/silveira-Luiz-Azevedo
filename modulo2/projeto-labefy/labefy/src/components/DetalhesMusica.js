import React from 'react'
import { base_url } from '../constants/URLs';
import axios from 'axios';

export default class DetalhesMusica extends React.Component {
    state = {
        musica: []
    }
componentDidMount = () =>{
    this.mostrarMusica();
}
    mostrarMusica = async () =>{
        try{
            const url = `${base_url}/playlists/${this.props.playlistId}/${this.props.musicaId}`
            const headers = {
                headers: {
                    Authorization: 'azevedolv-silveira'
                  }
              }
              const response = await axios.get(url, headers)
              this.setState({musica: response.data.result.tracks})
              console.log(response.data.result)
        } catch (err) {
            alert('Ih alá! Deu erro... tente novamente.')
            console.log(err.response.data)
        }
    }
    render() {
        const musica = this.state.musica.map((musica) =>{
            return (
                <div key={musica.id}>
                    <p>{musica.name}</p>
                    <audio controls>
                        <source src={musica.url} />
                    </audio>
                </div>
            )
        })
        return (
            <div>
                <button onClick={this.props.editTelaMusica}>Voltar</button>
                {musica}

            </div>
        )
    }
}
