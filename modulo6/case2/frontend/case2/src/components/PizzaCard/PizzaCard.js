import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ModalQuantity from '../Modal/ModalQuantity';
import { useState } from 'react';
import { useGlobal } from '../../context/global/GlobalStateContext';


export default function PizzaCard({pizza, addToCart, removeFromCart}) {
  const [openModal, setOpenModal] = useState(false);
  const {states} = useGlobal()

  const {cart} = states
console.log(cart);
  const choiceQuantity = (quantity) =>{
    addToCart( pizza, quantity)
    setOpenModal(false)
  }

  const pizzaInCart = cart.find((pizzaInCart) => pizzaInCart.id === pizza.id)
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Pizza
        </Typography>
        <Typography variant="h5" component="div">
          {pizza.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          R${pizza.price}
        </Typography>
        <Typography variant="body2">
          {pizza.ingredients}
        </Typography>
      </CardContent>
      <CardActions>
        {
        pizzaInCart ?
        <Button size="small" onClick={()=>{removeFromCart(pizza.id)}}>Remover</Button>
        :
        <>
        <Button size="small" onClick={() => setOpenModal(true)}>Adicionar ao carrinho</Button>
        <ModalQuantity choiceQuantity={choiceQuantity} open={openModal} setOpen={setOpenModal} />
        </>
      }
        
      </CardActions>
    </Card>
  );
}
