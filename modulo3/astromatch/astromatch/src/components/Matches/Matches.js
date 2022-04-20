import axios from "axios";
import React, { useEffect, useState } from "react";
// import axios from "axios";

export default function Matches(props) {
    const [matchList, setMatchList] = useState([])

    const getMatches = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-vinicius-silveira/matches"
        axios.get(url)
            .then((response) => {
                setMatchList(response.data.matches)
                console.log(response.data.matches)
            })
            .catch((error) => {
                console.log(error.response)
            })
    }
    useEffect(() => {
        getMatches()
    }, [])

    const listaMapeada = matchList.map((match) => {
        return (
            <div key={match.id}>
                <span>
                    <img src={match.photo} />
                    <p>{match.name}</p>
                    <p>{match.age}</p>
                </span>
            </div>
        )
    })
    return (
        <div>
            <div>
                <button onClick={props.homePage}>Home</button>
            </div>
            {listaMapeada}
        </div>
    )
}