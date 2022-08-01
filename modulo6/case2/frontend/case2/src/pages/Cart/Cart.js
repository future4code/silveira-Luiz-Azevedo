import { Typography } from '@mui/material';
import React from 'react'
import CartCard from '../../components/CartCard/CartCard';
import Footer from '../../components/Footer/Footer';
import { useGlobal } from '../../context/global/GlobalStateContext';
import { Body, GlobalStyle } from '../Index/styled';
import { DivHeader } from './styled';

function Cart() {
  const { states } = useGlobal()

  const { cart } = states
  // console.log(cart);
  return (
    <Body>
      <GlobalStyle />
      <main>
        <DivHeader>
          {cart.length > 0 ? (<CartCard cart={cart} />)
            :
            <Typography variant="h5" component="div">
              Nenhum pedido feito
            </Typography>}

        </DivHeader>
      </main>
      <Footer />
    </Body>
  )
}

export default Cart