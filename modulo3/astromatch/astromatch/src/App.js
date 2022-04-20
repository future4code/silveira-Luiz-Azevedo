import React, { useState } from "react";
import Home from "./components/Home/Home";
import Matches from "./components/Matches/Matches";

function App() {
  const [page, setPage] = useState("home")

  const exposedPage = () => {
    switch (page) {
      case "home":
        return <Home matchPage={matchPage} />
      case "matches":
        return <Matches homePage={homePage} />
      default:
        return <Home></Home>
    }
  }

  const homePage = () =>{
    setPage("home")
  }
  const matchPage = () =>{
    setPage("matches")
  }
  return (
    <div>
      {exposedPage()}
    </div>
  );
}

export default App;
