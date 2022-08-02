import { Button, Typography } from '@mui/material';
import React from 'react'
import CartCard from '../../components/CartCard/CartCard';
import Footer from '../../components/Footer/Footer';
import InputText from '../../components/InputText/InputText';
import { useGlobal } from '../../context/global/GlobalStateContext';
import { Body, GlobalStyle } from '../Index/styled';
import { DivHeader, DivShowOrders } from './styled';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constants/urls';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Cart() {
  const { states, setters } = useGlobal()
  const { setOrderMessage, setCart, setLastOrderInfo, setShowInfoInCart, setShowMessage } = setters
  const { cart, orderMessage, orderInfo, lastOrderInfo, showInfoInCart, showMessage } = states

  const [orders, request] = useRequestData(`${BASE_URL}/api/orders`, [])
  const [showAllOrders, setShowAllOrders] = useState(false)
  const ordersMap = orders && orders.map((order) => {
    return (
      <div key={order.id}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {order.id}
            </Typography>
            <Typography variant="h8" component="div">
              Pizza
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {order.items}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  })

  console.log(orders);

  const token = localStorage.getItem("token")
  return (
    <Body>
      <GlobalStyle />
      <main>
        <DivHeader>
          {cart.length > 0 ? (<CartCard setShowMessage={setShowMessage} setShowInfoInCart={setShowInfoInCart} setLastOrderInfo={setLastOrderInfo} lastOrderInfo={lastOrderInfo} setCart={setCart} orderMessage={orderMessage} setOrderMessage={setOrderMessage} cart={cart} />)
            :
            <>
              <InputText setShowMessage={setShowMessage} setShowInfoInCart={setShowInfoInCart} />
            </>
          }
          {token ? (
          <DivShowOrders>
          <Button onClick={() => setShowAllOrders(true)}>Buscar Pedidos</Button>
          <VisibilityOffIcon onClick={() => setShowAllOrders(false)}/>
          </DivShowOrders>
          ) : <></>}
          {showMessage === true ?
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Mensagem de confirmação
                </Typography>
                <Typography variant="h5" component="div">
                  {orderMessage}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {lastOrderInfo.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  R${lastOrderInfo.price} <br />Quantidade: {lastOrderInfo.quantity}
                </Typography>
                <Typography variant="body2">
                  {lastOrderInfo.ingredients}
                </Typography>
              </CardContent>
            </Card>
            :
            <></>
          }

          {showInfoInCart === true ?
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Pedido
                </Typography>
                <Typography variant="h5" component="div">
                  ID: {orderInfo.id}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {orderInfo.pizza}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Quantidade: {orderInfo.quantity}
                </Typography>
              </CardContent>
            </Card>
            :
            <></>
          }
          {showAllOrders === true ? ordersMap : <></>}

        </DivHeader>
      </main>
      <Footer />
    </Body>
  )
}

export default Cart