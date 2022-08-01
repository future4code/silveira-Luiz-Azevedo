import React from 'react'
import { Cart, FooterContainer, Home } from "./styled"
import home from '../../assets/home.png'
import cart from '../../assets/cart.png'
import avatar from '../../assets/avatar.png'
import { useNavigate } from 'react-router-dom';
import { goToAdmin, goToCart, goToIndex, goToLogin } from '../../routes/coordinator'



function Footer() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')

  return (
    <FooterContainer >
    <Home src={home} onClick={() =>{goToIndex(navigate)}}/>
     <Cart src={cart} onClick={()=>{goToCart(navigate)}}/>
     {token ? <img src={avatar} onClick={() =>{goToAdmin(navigate)}} alt="avatar"/> : <img alt="avatar" src={avatar} onClick={() =>{goToLogin(navigate)}}/>}
     
</FooterContainer>
  )
}

export default Footer