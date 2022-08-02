import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { deletePizza } from '../../services/user';


export default function AdminPizzaCard({pizza, request}) {
 
  

 
 

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
        <Button size="small" onClick={()=>{deletePizza(pizza.id, request)}}>Excluir</Button>        
      </CardActions>
    </Card>
  );
}
