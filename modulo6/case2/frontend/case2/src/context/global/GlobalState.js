import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = ({children}) => {
  const [cartTotalValue, setCartTotalValue] = useState([0]);
  const [cartWithOrders, setCartWithOrders] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartOrder,setCartOrder] = useState({pizza:"", quantity:0});

  
  const addToCart = (pizza, quantity) =>{
    setCart([{...pizza, quantity}])
  }
  const removeFromCart = (id) =>{
    const index = cart.findIndex((pizza) => pizza.id === id)
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
  }
  const states = { cart, cartOrder, cartWithOrders, cartTotalValue};
  const setters = { setCart, setCartOrder, setCartWithOrders, setCartTotalValue};
  const requests = {addToCart, removeFromCart};

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
