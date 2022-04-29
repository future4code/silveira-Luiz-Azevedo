import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {goToBack, goToHome} from '..//../routes/coordinator'
import { GlobalStyle, Body, TripContainer, MainContainer, SubsButtonContainer, HeaderButtonDiv, BackContainer, CandidatosPendentesContainer, CandidatosAprovadosContainer, DescricaoContainer } from './styles'
import logo from '../../imgs/FOGUETE.png'
// import CardCandidates from '../../components/CardCandidates/CardCandidates';


export default function TripDetails() {
  const pathParams = useParams();
  const navigate = useNavigate();
  const [tripDetails, setTripDetails] = useState({});
  const [candidates, setCandidates]= useState()

const getTripDetails = () =>{
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-vinicius-silveira/trip/${pathParams.id}`;
  const headers = {
    headers:{
      auth: window.localStorage.getItem('token')
    }
  }
  axios.get(url, headers)
  .then((response) =>{
    setTripDetails(response.data.trip)
  })
  .catch((error) =>{
    console.log(error)
  })
}


// const candidateList = () =>{
//   setCandidates(tripDetails.candidates)
// };

// const listaMapeada = candidates.map((candidate) =>{
//   return (
//     <DescricaoContainer key={candidate.id}>
//       <CardCandidates candidate={candidate} id={candidate.id} getTripDetails={getTripDetails}/>
//     </DescricaoContainer>
//   )
// })
useEffect(()=>{
  getTripDetails();
  // candidateList();
}, [])
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
        
        <DescricaoContainer>
        <h2>Candidatos Pendentes</h2>
        {/* {listaMapeada} */}
        </DescricaoContainer>
        <CandidatosAprovadosContainer>
          <h2>Candidatos Aprovados</h2>
        </CandidatosAprovadosContainer>
        </TripContainer>
        <SubsButtonContainer>
        <CandidatosPendentesContainer>
        <h2>{tripDetails.name}</h2>
        <p><b>Nome:</b> {tripDetails.name}</p>
          <p><b>Descrição:</b> {tripDetails.description}</p>
          <p><b>Planeta:</b> {tripDetails.planet}</p>
          <p><b>Duração:</b> {tripDetails.durationInDays} dias</p>
          <p><b>Data:</b> {tripDetails.date}</p>
        </CandidatosPendentesContainer>
        
        </SubsButtonContainer>
        </MainContainer>
      </main>
    </Body>
  )
}
