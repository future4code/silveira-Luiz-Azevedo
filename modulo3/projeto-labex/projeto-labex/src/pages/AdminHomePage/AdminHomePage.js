import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { GlobalStyle, Body, TripContainer, MainContainer, SubsButtonContainer, HeaderButtonDiv, BackContainer } from './styles'
import { useNavigate } from "react-router-dom";
import { goToHome, goToBack, goToCreateTrip, goToTripDetails } from '../../routes/coordinator';
import logo from '../../imgs/FOGUETE.png'
import CardTripAdmin from '../../components/CardTripAdmin/CardTripAdmin';


export default function AdminHomePage() {
const navigate = useNavigate()

const [tripList, setTriplist] = useState([])

  
const getAllTrips = () =>{
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-vinicius-silveira/trips"
  axios.get(url)
  .then((response) =>{
    setTriplist(response.data.trips)
  })
  .catch((error) =>{
    console.log(error)
  })
}
useEffect(() =>{
  getAllTrips()
}, [])

  const triplistMap = tripList.map((trip) =>{
    return (
      <TripContainer key={trip.id}>
       <CardTripAdmin trip={trip} id={trip.id}/>
      </TripContainer>
    )
  })

  return (
    <Body>
      <GlobalStyle />
      <header>
        <HeaderButtonDiv>
        <img onClick={() => goToHome(navigate)}src={logo} alt='logo'/>       
        </HeaderButtonDiv>
        <HeaderButtonDiv>
        <button>Logout</button>
        </HeaderButtonDiv>
      </header>
      <main>
<MainContainer>
  <BackContainer>
    <button onClick={()=> goToBack(navigate)}>Voltar</button>
  </BackContainer>
        <TripContainer>
          <h1>Lista de Viagens</h1>
          {triplistMap}
        </TripContainer>
        <SubsButtonContainer>
        <button>Criar Viagem</button>
        </SubsButtonContainer>
        </MainContainer>
        
      </main>
    </Body>
  )
}
