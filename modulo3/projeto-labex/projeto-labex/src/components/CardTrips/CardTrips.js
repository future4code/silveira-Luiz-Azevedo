import React from 'react'
import {CardTripContainer} from './styles'

export default function CardTrips(props) {
  return (
    <CardTripContainer>
      <p>{props.trip.name}</p>
      <p>Planeta: {props.trip.planet}</p>
      <p>{props.trip.description}</p>
      <p>Data: {props.trip.date}</p>
      <p>Duração: {props.trip.durationInDays}</p>

    </CardTripContainer>
  )
}
