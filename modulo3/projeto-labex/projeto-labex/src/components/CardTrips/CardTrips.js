import React from 'react'
import {CardTripContainer} from './styles'

export default function CardTrips(props) {

  // const formataData = new Date(props.trip.date).toISOString().slice(0, 10);

  return (
    <CardTripContainer>
      <p><b>{props.trip.name}</b></p>
      <p><b>Planeta:</b> {props.trip.planet}</p>
      <p>{props.trip.description}</p>
      <p><b>Data:</b> {props.trip.date}</p>
      <p><b>Duração:</b> {props.trip.durationInDays}</p>
    </CardTripContainer>
  )
}
