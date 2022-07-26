import React, { useState } from 'react';
import { Body, GlobalStyle, HeaderButtonDiv, InputLogin, SendContainer } from './styled';
import SendIcon from '@mui/icons-material/Send';
import useForm from '../hooks/useForm';
import axios from 'axios';
import { Chart } from "react-google-charts";
import useRequestData from '../hooks/useRequestData';


function IndexPage() {
  const {form, onChange, clearForm} = useForm({first_name:"", last_name:"", participation:""})
  const [users, isLoading] = useRequestData("https://case1-cubonetworking.herokuapp.com/user", [])

  const usersMap = users && users.map((user)=>{
    return [`${user.first_name}`, user.participation]
  })

  // const [options, setOptions] = useState({
  //   title: 'Participação'
  // })
  // const [data, setData] = useState()
  // const arrayChart = [
  //   ['Usuários', 'Participação'],
  //   usersMap
  // ]
  //   setData(usersMap);


  // const getInfoChart = async ()=>{
  //   const url = "https://case1-cubonetworking.herokuapp.com/user";
  //   await axios.get(url)
  //   .then((response)=>{
  //     console.log(response.data);
  //   })
  //   .catch((error)=>{
  //     alert(`${error.message}`)
  //   })
  // }


  const onSubmitCadastro = async (event) =>{
    event.preventDefault()
    const url = "https://case1-cubonetworking.herokuapp.com/user";
    const body ={
      "first_name": form.first_name,
      "last_name": form.last_name,
      "participation": form.participation
    }
    const headers = {headers:{"Content-Type": "application/json"}}
    await axios.post(url, body, headers)
    .then((response) =>{
      console.log(response.data)
      clearForm()
    })
    .catch((error) =>{
      alert("Erro!")
      console.log(error.message)
    })
  }

  
  return (
    <Body>
      <GlobalStyle />
      <header>
        <HeaderButtonDiv>
        <form onSubmit={onSubmitCadastro}>
          <div>
          <InputLogin
          name='first_name' 
          value={form.first_name}
          placeholder="Primeiro nome"
          onChange={onChange}
          required
          type={'text'}
          />
          </div>
         
          <div>
          <InputLogin 
          name='last_name'
          value={form.last_name}
          type={'text'}
          placeholder="Último nome"
          onChange={onChange}
          required
          />
          </div>
          <div>
          <InputLogin 
          name='participation'
          value={form.participation}
          type={'number'}
          placeholder="Participação"
          onChange={onChange}
          required
          />
          </div>
          <div>
          <SendContainer>
          <button type='submit'><SendIcon /></button>
          </SendContainer>
          </div>
          </form>
        </HeaderButtonDiv>
      </header>
      <main>
      <div>
          {/* <Chart
            width={'500px'}
            height={'300px'}
            chartType="PieChart"
            data={data}
            options={options}
          /> */}
        </div>

      </main>
    </Body>
  )
}

export default IndexPage