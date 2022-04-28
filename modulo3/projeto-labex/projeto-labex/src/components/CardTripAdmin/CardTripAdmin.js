import React from 'react'
import { useNavigate } from "react-router-dom";
import { goToTripDetails } from '../../routes/coordinator';
import { CardTripContainer } from './styles';
export default function CardTripAdmin(props) {
const navigate = useNavigate()
    return (
        <CardTripContainer >
            <p onClick={() => goToTripDetails(navigate)}>{props.trip.name}</p>
            <button>X</button>
        </CardTripContainer>
    )
}
