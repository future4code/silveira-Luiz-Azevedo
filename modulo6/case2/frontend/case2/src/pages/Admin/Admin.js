import React from 'react';
import { Body, DivButtonLogout, GlobalStyle, HeaderButtonDiv } from './styled';
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls';
import Footer from '../../components/Footer/Footer';
import AdminPizzaCard from '../../components/AdminPizzaCard/AdminPizzaCard';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { goToAddPizza } from '../../routes/coordinator';
import useProtectedPage from '../../hooks/useProtectedPage';



function Admin() {
    const navigate = useNavigate();
    useProtectedPage()
  const [pizzas, request] = useRequestData(`${BASE_URL}/api/pizzas`, [])


  const pizzasMap = pizzas && pizzas.map((pizza)=>{
    return (
      <div key={pizza.id}>
        <AdminPizzaCard request={request} pizza={pizza}/>
      </div>
      )
  })

  const logout =()=>{
    window.localStorage.removeItem("token")
    console.log("click");
  }

  return (
    <Body>
      <GlobalStyle />
      <header>
        <HeaderButtonDiv>
        </HeaderButtonDiv>
      </header>
      <main>
        <DivButtonLogout>
        <Button onClick={() => {goToAddPizza(navigate)}}>Criar Pizza</Button>
        <Button onClick={() => logout()}>Logout</Button>
        </DivButtonLogout>
      <div>
          {pizzas ? (pizzasMap): <h1>Restaurante fechado</h1>}
        </div>
      </main>
<Footer />
    </Body>
  )
}

export default Admin 