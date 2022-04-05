import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default class Tela1 extends React.Component {
  state = {
      inputName: "",
      inputEmail: ""
  }
  
  onChangeName = (event) =>{
      this.setState({inputName:event.target.value})
  }
  onChangeEmail = (event) =>{
    this.setState({inputEmail:event.target.value})
}
createUser = () => { //CRIAR USUÁRIO
    const axiosConfig = { //CHAVE DE ACESSO
      headers: {
        Authorization: "luiz-vinicius-silveira"
      }
    };

    const body = { //CORPO DO SAVE
      name: this.state.inputName,
      email: this.state.inputEmail
    };

    axios
      .post( //ESPECIFICAR O MÉTODO
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",//URL
        body,//CORPO DO SAVE
        axiosConfig //CHAVE DE ACESSO
      )
      .then((response) => {//SE DER CERTO = ALERT AVISANDO QUE FOI CRIADO
        alert(`Usuário ${this.state.inputName} criado com sucesso!`);
        this.setState({ inputName: "", inputEmail: "" });
        console.log(response)
      })
      .catch(error => { //SE DER ERRADO = ALERT COM MENSAGEM DE ERRO
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };
    render() {
    return (
      <div>
          <input
          type={'text'}
          onChange={this.onChangeName}
          placeholder={"Nome"}
          value={this.state.inputName} 
          />
          <input
          type={'email'} 
          onChange={this.onChangeEmail}
          placeholder={"Nome"}
          value={this.state.inputEmail}/>
          <button
            onClick={this.createUser}
          >
            Cadastrar
          </button>
      </div>
    )
  }
}
