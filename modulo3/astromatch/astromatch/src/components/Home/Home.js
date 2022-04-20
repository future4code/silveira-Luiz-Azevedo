import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Home(props) {
    const [profile , setProfile] = useState({})

    const getProfiles = () =>{
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-vinicius-silveira/person'
        axios
        .get(url)
        .then((response) =>{
            setProfile(response.data.profile)
        })
        .catch((err) =>{
            console.log(err.response)
        })
    }

    useEffect(() => { 
      getProfiles()
    }, [])
    
    const getMatch = (boolean) =>{
    const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-vinicius-silveira/choose-person"
    const headers = {
        headers:{
        "Content-Type": "application/json"
    }
    }
    const body = {
        "id": profile.id,
        "choice":boolean
    }
    axios.post(url, body, headers)
    .then((response) =>{
        console.log(response)
        getProfiles()
    })
    .catch((error) =>{
        console.log(error.response)
    })
    }

  return (
    <div>
        <div>
            <button onClick={props.matchPage}>Matches</button>
        </div>
      <div>
          <img src={profile.photo} alt={profile.name} />
      </div>
      <div>
          <div>
          <p>{profile.name}</p>
          <p>{profile.age}</p>
          </div>
          <p>{profile.bio}</p>
      </div>
      <div>
          <button onClick={() => getMatch(true)}>❤</button>
          <button onClick={() => getMatch(false)}>❌</button>
      </div>
    </div>
  )
}
