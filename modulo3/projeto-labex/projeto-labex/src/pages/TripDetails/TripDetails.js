import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {goToBack, goToHome} from '..//../routes/coordinator'
import { GlobalStyle, Body, TripContainer, MainContainer, SubsButtonContainer, HeaderButtonDiv, BackContainer, CandidatosPendentesContainer, CandidatosAprovadosContainer, DescricaoContainer } from './styles'
import logo from '../../imgs/FOGUETE.png'
import CardCandidates from '../../components/CardCandidates/CardCandidates';
import ApprovedCandidates from '../../components/ApprovedCandidates/ApprovedCandidates';


export default function TripDetails() {
  const pathParams = useParams();
  const navigate = useNavigate();
  const [tripDetails, setTripDetails] = useState({});
  const [candidates, setCandidates]= useState();
  const [approvedCandidates, setApprovedCandidates] = useState();

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
    setCandidates(response.data.trip.candidates)
    setApprovedCandidates(response.data.trip.approved)
  })
  .catch((error) =>{
    console.log(error.response)
  })
}


const decideCandidate = (candidateID, decision) => {
  const body = {
      approve: decision
  }
  const headers = {
    headers:{
        'Content-Type': 'application/json',
        'auth': window.localStorage.getItem('token')
    }
}
const url =`https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-vinicius-silveira/trips/${pathParams.id}/candidates/${candidateID}/decide`
  axios.put(url, body, headers)
  .then(() => {
      alert("Decisão registrada com sucesso!")
      getTripDetails()
  })
  .catch((err) => console.log(err.response))
}
 console.log(tripDetails)

const candidatesList = candidates && candidates.map((candidate) =>{
  return (
    <DescricaoContainer key={candidate.id}>
      <CardCandidates candidate={candidate} id={candidate.id} decideCandidate={decideCandidate}/>
    </DescricaoContainer>
  )
})

const approvedList = approvedCandidates && approvedCandidates.map((candidate) =>{
  return(
    <DescricaoContainer key={candidate.id}>
      <ApprovedCandidates candidate={candidate} id={candidate.id} />
    </DescricaoContainer>
  )
})
useEffect(()=>{
  getTripDetails();
}, [])

// toISOString().slice(0, 10) - Tranforma a data no formato: yyyy-mm-dd
//  new Date()- Pega a data atual
const data = new Date(tripDetails.date)
const dataFormatada= data.toLocaleDateString('pt-BR', {timeZone: 'UTC'})


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
        
        <CandidatosPendentesContainer>
          {candidates && candidates.lenght <0 ?(
            <>
            <h2>Candidatos Pendentes</h2>
            {candidatesList}
             </> 
            
          ):
          ( 
            <DescricaoContainer>
            <h2>Não há candidatos Pendentes</h2>
            <img src={logo} alt='logo'/>  
            </DescricaoContainer>
            )}
        </CandidatosPendentesContainer>
        <DescricaoContainer>
        {candidates && approvedCandidates.lenght <0 ?
        (
            <>
            <h2>Candidatos Aprovados</h2>
          {approvedList}
            </>
          ):(
            <>
          <h2>Não há candidatos Aprovados</h2>
            <img src={logo} alt='logo'/>  
          </>
          )}
        </DescricaoContainer>
        </TripContainer>
        <SubsButtonContainer>
        <DescricaoContainer>
        <h2>{tripDetails.name}</h2>
        <p><b>Viagem:</b> {tripDetails.name}</p>
          <p>{tripDetails.description}</p>
          <p><b>Planeta:</b> {tripDetails.planet}</p>
          <p><b>Duração:</b> {tripDetails.durationInDays} dias</p>
          <p><b>Data:</b> {dataFormatada}</p>
          <img src={logo} alt='logo'/> 
        </DescricaoContainer>
        
        </SubsButtonContainer>
        </MainContainer>
      </main>
    </Body>
  )
}
