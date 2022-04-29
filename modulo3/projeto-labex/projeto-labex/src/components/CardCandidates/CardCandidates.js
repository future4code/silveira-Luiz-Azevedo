import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

export default function CardCandidates(props) {
    const pathParams = useParams();

    const decideCandidate = (candidateId, decision) => {
        const body = {
            approve: decision
        }
      const url =`https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-vinicius-silveira/trip/${pathParams.id}}/candidates/${candidateId}/decide`
        axios.put(url, body, {
            headers: {auth: localStorage.getItem("token")}
        })
        .then(() => {
            alert("Decisão registrada com sucesso!")
            props.getTripDetails()
        })
        .catch((err) => console.log(err.response.data))
      }
  return (
    <div>
    <p><b>{props.candidate.name}</b></p>
    <p>{props.candidate.age}</p>
    <p>{props.candidate.country}</p>
    <p>{props.candidate.profession}</p>
    <p>{props.candidate.applicationText}</p>
    <button onClick={()=> decideCandidate(props.id, true)}>Aprovado</button>
    <button onClick={()=> decideCandidate(props.id, false)}>Reprovado</button>
    </div>
  )
}
