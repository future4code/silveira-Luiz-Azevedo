import axios from 'axios';
import React from 'react'
import { useNavigate } from "react-router-dom";
import { goToTripDetails } from '../../routes/coordinator';
import { CardTripContainer } from './styles';
export default function CardTripAdmin(props) {
const navigate = useNavigate()

const deleteTrip = (id) =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-vinicius-silveira/trips/${id}`
    const headers = {
        headers:{
            'Content-Type': 'application/json',
            'auth': window.localStorage.getItem('token')
        }
    }
    axios.delete(url, headers)
    .then((response) =>{
        alert("Viagem excluída com sucesso!")
        console.log(response)
        props.getAllTrips()
    })
    .catch((error) =>{
        console.log(error)
    })
}

    return (
        <CardTripContainer >
            <span onClick={() => goToTripDetails(navigate, props.id)}><p>{props.trip.name}</p></span>
            <button onClick={() => deleteTrip(props.id)}>X</button>
        </CardTripContainer>
    )
}
