import React from 'react';
import { Body, GlobalStyle, HeaderButtonDiv } from './styled';
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls';
import PizzaCard from '../../components/PizzaCard/PizzaCard';
import { Button } from '@mui/material';
import { goToLogin } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import { useGlobal } from '../../context/global/GlobalStateContext';


function IndexPage() {
  const navigate = useNavigate()

  const [pizzas] = useRequestData(`${BASE_URL}/api/pizzas`, [])

  const {requests} = useGlobal()
  const { addToCart, removeFromCart} = requests

  const pizzasMap = pizzas && pizzas.map((pizza)=>{
    return (
      <div key={pizza.id}>
        <PizzaCard addToCart={addToCart} removeFromCart={removeFromCart} pizza={pizza}/>
      </div>
      )
  })


  

  return (
    <Body>
      <GlobalStyle />
      <header>
        <HeaderButtonDiv>
        <Button onClick={() =>{goToLogin(navigate)}}>Admin</Button>
        </HeaderButtonDiv>
      </header>
      <main>
      <div>
          {pizzas ? (pizzasMap): <h1>Restaurante fechado</h1>}
        </div>
      </main>
<Footer />
    </Body>
  )
}

export default IndexPage 