// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
import React from 'react'
// import CardTrips from '../../components/CardTrips/CardTrips'
import { GlobalStyle, Body, TripConatainer, MainContainer, SubsButtonContainer, HeaderButtonDiv } from './styled'

export default function Home(props) {
  // const [triplist, setTriplist] = useState()


// const getAllTrips = () =>{
//   const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-vinicius-silveira/trips"
//   axios.get(url)
//   .then((response) =>{
//     setTriplist(response.data.trips)
//     console.log(triplist)
//   })
//   .catch((error) =>{
//     console.log(error.response)
//   })
// }

// useEffect(() =>{
//   getAllTrips()
// }, [])






  // const triplistMap = triplist.map((trip) =>{
  //   return (
  //     <TripConatainer key={trip.id}>
  //       <CardTrips />
  //     </TripConatainer>
  //   )
  // })
  return (
    <Body>
      <GlobalStyle />
      <header>
        <HeaderButtonDiv>
        <p>Logo</p>
        </HeaderButtonDiv>
        <HeaderButtonDiv>
        <button onClick={props.loginPage}>Login</button>
        </HeaderButtonDiv>
      </header>
      <main>
        <MainContainer>
        <TripConatainer>
        {/* {triplistMap} */}
        CardTrips
        </TripConatainer>
        <SubsButtonContainer>
        <button onClick={props.subsPage}>Quero viajar!</button>
        </SubsButtonContainer>
        </MainContainer>
      </main>
    </Body>
  )
}
