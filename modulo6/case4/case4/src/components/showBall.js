import { useEffect } from "react";
import { useGlobal } from "../context/GlobalStateContext";
import { Ball, NumberInsideTheBall } from "../pages/Mega-sena/styled";


export default function ShowBall(props) {
    const { states, requests } = useGlobal();

    const concurso = states.concursosById
    // console.log(props);
    // console.log(states);

    const loteriaConcurso = states.loteriaConcurso

    // console.log(loteriaConcurso[Number(props.LoteriaConcurso)]);
    console.log(props.LoteriaConcurso);
    useEffect(() => {
        { loteriaConcurso && requests.getConcursosById(loteriaConcurso[Number(props.LoteriaConcurso)].concursoId) }
    }, [])


    const doBall = concurso && concurso.numeros && concurso.numeros.map((num) => {
        // console.log(num);
        return (
        <Ball key={num}>
            <NumberInsideTheBall> {num} </NumberInsideTheBall>


        </Ball>)
    })


    return (
        <div>
            {states && doBall}
        </div>



    )

}