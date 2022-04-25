import React, { useState } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Subscription from './pages/Subscription/Subscription'

export default function App() {
  const [page, setPage] = useState("home")
  
  const renderPage = () => {
    switch (page) {
      case "home":
        return <Home loginPage={loginPage} subsPage={subsPage}/>
      case "login":
        return <Login homePage={homePage} />
      case "subscription":
        return <Subscription homePage={homePage} />
      default:
        return <Home />
    }
  }
  const homePage = () =>{
    setPage("home")
  }
  const loginPage = () =>{
    setPage("login")
  }
  const subsPage = () =>{
    setPage("subscription")
  }
  
  return (
    <div>
      {renderPage()}
    </div>
  )
}
