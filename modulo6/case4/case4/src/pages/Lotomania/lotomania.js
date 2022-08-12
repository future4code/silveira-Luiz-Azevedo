import React, { useState } from 'react';
import { useGlobal } from '../../context/GlobalStateContext';
import useForm from '../../hooks/useForm';
import { goToPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { Button, Concurso, ContainerMS, Data, MainContainerU, NameLoteria } from './styled';



function Lotomania() {
    const { form, onChange, clearForm } = useForm({ pagina: '' })
    const { states, setters, requests } = useGlobal();
    const navigate = useNavigate()

    const {pagina, loteria } = states;
    const { setPagina } = setters;

    const doCheckIn = e => {
        e.preventDefault()
        goToPage(navigate, pagina)
        console.log(states);
    }

    return (
        <MainContainerU>

            <ContainerMS>
                <form onSubmit={doCheckIn}>
                    <select name="pagina" value={pagina} onChange={(e) => { setPagina(e.target.value) }}>

                        <option value="/diadesorte" >Dia de Sorte</option>
                        <option value="/lotofacil" >Loto Facil</option>
                        <option value="/lotomania" >Loto Mania</option>
                        <option value="/" >Mega-Sena</option>
                        <option value="/quina" >Quina</option>
                        <option value="/timemania" >Time Mania</option>

                    </select>
                    <Button>IR PARA A PAGINA</Button>
                </form>
                {
                    states && loteria && loteria[0] &&
                    <NameLoteria>{loteria[0].nome}</NameLoteria>
                }

                <Concurso>CONCURSO</Concurso>
                <Data>02/08/2022</Data>

            </ContainerMS>
            {/* {states.concursosById && states && loteriaConcurso[0] && <ShowBall LoteriaConcurso={0} />} */}
        </MainContainerU >
    )
} 

export default Lotomania