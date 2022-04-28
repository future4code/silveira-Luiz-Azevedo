import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHome, goToBack, goToAdmPage } from '../../routes/coordinator';
import { Body, GlobalStyle, MainContainer } from './styles';
import logo from '../../imgs/FOGUETE.png'
import axios from 'axios';
export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState()
  const [senha,setSenha] = useState()

  const onChangeEmail = (e) =>{
    setEmail(e.target.value)
  }
  const onChangeSenha = (e) =>{
    setSenha(e.target.value)
  }
  const onSubmitLogin = () =>{
    console.log(email, senha)
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-vinicius-silveira/login";
    const body ={
      email: email,
      password: senha
    }
    axios.post(url, body)
    .then((response) =>{
      navigate("/admPage")
      console.log(response.data)
      window.localStorage.setItem("token", response.data.token)
    })
    .catch((error) =>{
      console.log(error)
    })
  }
  return (
    <Body>
      <GlobalStyle />
      <header>
        <img onClick={() => goToHome(navigate)} src={logo} />
      </header>
      <main>
        <MainContainer>
          <input 
          value={email}
          placeholder="E-mail"
          onChange={onChangeEmail}
          />
          <input 
          value={senha}
          placeholder="Senha"
          onChange={onChangeSenha}
          />
          <button onClick={() => goToBack(navigate)}>Voltar</button>
          <button type='submit' onClick={onSubmitLogin}>Entrar</button>

        </MainContainer>
      </main>
    </Body>
  )
}
