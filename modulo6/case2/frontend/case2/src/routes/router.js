import { Routes, Route } from "react-router-dom"
import Admin from "../pages/Admin/Admin"
import CreatePizzaForm from "../pages/Admin/CreatePizzaForm"
import Cart from "../pages/Cart/Cart"
import IndexPage from "../pages/Index"
import Login from "../pages/Login/login"
import SignUp from "../pages/Signup/signup"


const Router = () =>{
return (

<Routes>
<Route index element={<IndexPage />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<SignUp />} />
<Route path="/cart" element={<Cart />} />
<Route path="/admin" element={<Admin />} />
<Route path="/pizza" element={<CreatePizzaForm />} />
</Routes>

)
}

export default Router 