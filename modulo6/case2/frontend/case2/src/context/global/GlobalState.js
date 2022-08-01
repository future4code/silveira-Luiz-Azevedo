import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = ({children}) => {
  const [orderMessage, setOrderMessage] = useState("");
  const [orderInfo, setOrderInfo] = useState({});
  const [lastOrderInfo, setLastOrderInfo] = useState({});
  const [cart, setCart] = useState([]);
  const [cartOrder,setCartOrder] = useState({pizza:"", quantity:0});
  const [showInfoInCart, setShowInfoInCart] = useState(false);
 const [showMessage, setShowMessage] = useState(false);



  
  const addToCart = (pizza, quantity) =>{
    setCart([{...pizza, quantity}])
  }
  const removeFromCart = (id) =>{
    const index = cart.findIndex((pizza) => pizza.id === id)
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
  }
  const states = { cart, cartOrder, orderInfo, orderMessage, lastOrderInfo, showInfoInCart, showMessage};
  const setters = { setCart, setCartOrder, setOrderInfo, setOrderMessage, setLastOrderInfo, setShowInfoInCart,setShowMessage};
  const requests = {addToCart, removeFromCart};

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
