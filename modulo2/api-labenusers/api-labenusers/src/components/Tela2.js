import React from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Tela3 from './Tela3.js';
const DeleteButton = styled.span`
color: red;
cursor: pointer;
margin-left: 5px;
`
const UserName = styled.span`
cursor: pointer;
p:hover{
    color: gray;
    font-style: oblique;
}
`
const SlyledLi = styled.li`
display: flex;
align-items: center;
`
const axiosConfig = { //CHAVE DE ACESSO - PQ CRIAR FORA DO COMPONENTE DE CLASSE?
    headers: {
      Authorization: "luiz-vinicius-silveira"
    }
  };
export default class Tela2 extends React.Component {
    state ={
        listaDeUsuarios: [],
        userId: "",
        nome: "",
        pagina: "lista"
    }
    componentDidMount() { //RENDERIZA A LISTA ASSIM QUE ABRE A PÁGINA
        this.getAllUsers();
      }

    getAllUsers = () => { //PUXAR A LISTA DE USUÁRIOS
        axios
          .get(//ESPECIFICA O MÉTODO
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", //URL,CHAVE DE ACESSO
            axiosConfig
          )
          .then(response => { //THEN ((RESPONSE) => A LISTA DE USUÁRIOS É O QUE ESTÁ SALVO NO BACK-END - SE DER CERTO
            this.setState({ listaDeUsuarios: response.data });
          })
          .catch(error => {
            alert("ERRO AO VISUALIZAR A LISTA");
          })
      };

      deleteUsers = userId => {//DELETA USUÁRIO
        if (window.confirm("Tem certeza que deseja apagar o usuário?")) {
          axios
            .delete(
              `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,//ID ESPECIFICA DO USUÁRIO A SER DELETADO
              axiosConfig//CHAVE DE ACESSO
            )
            .then(() => {
              alert("Usuário apagado com sucesso!");
              this.getAllUsers();//ATUALIZA A LISTA
            })
            .catch(error => {
              alert("ERRO AO APAGAR USUARIO");
            });
        }
      };

      changePage = (userId) =>{ //UTIL PARA MOSTRAR OS DETALHES DE CADA USUÁRIO 
        if (this.state.pagina === "lista") { //SE A PAGINA ESTIVER NA LISTA
            this.setState({ pagina: "usuario", userId: userId });//MUDAR PARA USUÁRIO
          } else {
            this.setState({ pagina: "lista", userId: "" });//SE TIVER USUÁRIO MUDAR PARA LISTA
      };
    };

  render() {
      
    return (
      <div>
          {this.state.pagina === "lista" ? 
        (
          <div>
            <ul>
              {this.state.listaDeUsuarios.length === 0 && <div>Não há usuários salvos...</div>}{/*SE A LISTA ESTIVER ZERADA APARECE A MENSAGEM CARREGANDO*/}
              {this.state.listaDeUsuarios.map(user => {//MAP PARA TRANSFORMAR ARRAY EM LISTA NÃO ORDENADA
                return (
                  <SlyledLi>
                    <UserName onClick={() => this.changePage(user.id)}>{/*TROCAR DE TELA PARA DETALHES DO USUARIO de acordo com a id especifica*/}
                      <p>{user.name}</p>
                    </UserName>
                    <DeleteButton
                      onClick={() => this.deleteUsers(user.id)}//USER.ID CHAVE DE ACESSO AO USUÁRIO NO BACK-END PARA SER DELETADO - QDO USAR () => E QDO NÃO USAR???
                    >
                    <b>X</b>
                    </DeleteButton>
                  </SlyledLi>
                );
              })}
            </ul>
           </div>
        ) :(<Tela3 userId={this.state.userId} changePage={this.changePage}/>)
        }
      </div>
    )
  }
}
