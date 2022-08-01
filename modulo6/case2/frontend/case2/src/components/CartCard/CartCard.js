import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';


export default function CartCard({cart}) {
 
const confirmOrder = async (cart) =>{
  // console.log(cart);
const headers = {
  headers: {
    'Content-Type': 'application/json'
  }
}
const body ={
  'pizza': cart.name,
  'quantity': cart.quantity
}
await axios.post(`${BASE_URL}/api/orders`, body, headers)
  .then((res)=>{
    // alert(res.data)
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  })
}
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Pedido
        </Typography>
        <Typography variant="h5" component="div">
          {cart[0].name} 
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          R${cart[0].price} <br />Quantidade: {cart[0].quantity}
        </Typography>
        <Typography variant="body2">
          {cart[0].ingredients}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{confirmOrder(cart[0])}}>Confirmar pedido</Button>
      </CardActions>
    </Card>
  );
}
