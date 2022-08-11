import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { baseUrl } from "../constants/url";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = ({children}) => {
    const [loteria, setLoteria] = useState([])
    const [loteriaConcurso, setLoteriaConcurso] = useState([])
    const [concursosById, setConcursoById] = useState({})
    const [idConcurso, setIdConcurso] = useState([])
    const [pagina, setPagina] = useState('')




    const getLoteria = async () => {
        const url = `${baseUrl}/loterias`

        await axios.get(url)
        .then((response)=>{
            setLoteria(response.data)

        })
        .catch((error)=>{
            console.log(error);
        })

    
    }

    const getLoteriaConcursos = async () => {
        const url = `${baseUrl}/loterias-concursos`
        await axios.get(url)
        .then((response)=>{
            setLoteriaConcurso(response.data)

        })
        .catch((error)=>{
            console.log(error);
        })

    }

    const getConcursosById = async (id) => {
    
            await axios.get(`${baseUrl}/concursos/${id}`)
            .then((response)=>{
            setConcursoById(response.data)
            })
            .catch((error)=>{
                console.log(error);
            })

        
    }



    useEffect(() => {
        getLoteria()
        getLoteriaConcursos()

    }, [])

    const states = { loteria, loteriaConcurso, concursosById, idConcurso, pagina };
    const setters = { setLoteria, setLoteriaConcurso, setConcursoById, setPagina };
    const requests = { getLoteria, getConcursosById, getLoteriaConcursos };

  return (
    <GlobalStateContext.Provider value={{ states, setters, requests }}>
      {children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;