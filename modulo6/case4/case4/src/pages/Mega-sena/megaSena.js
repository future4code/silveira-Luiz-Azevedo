import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ShowBall from '../../components/showBall';
import { useGlobal } from '../../context/GlobalStateContext';
import useForm from '../../hooks/useForm';
import { goToPage } from '../../routes/coordinator';
import {Body, Concurso, LoteryDiv, Data, EstructureDiv, GlobalStyle, NameLoteria, NumberDiv } from './styled';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, ThemeProvider } from '@mui/material';
import theme from '../../constants/theme';




function MegeSena() {
    const { form, onChange, clearForm } = useForm({ pagina: '' })
    const { states, setters, requests } = useGlobal();
    const navigate = useNavigate()

    const { pagina, loteria, concursosById, loteriaConcurso } = states;
    const { setPagina } = setters;

    const doCheckIn = e => {
        e.preventDefault()
        goToPage(navigate, pagina)
        console.log(states);
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <EstructureDiv>
        {/* <MainContainerU> */}
            <LoteryDiv>
                <FormControl onSubmit={doCheckIn}>
                    {/* <InputLabel id="demo-simple-select-label">{loteria[0].nome}</InputLabel> */}
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={pagina}
                        label="Concurso"
                        onChange={(e) => { setPagina(e.target.value) }}
                    >
                        <MenuItem value="/diadesorte">Dia de Sorte</MenuItem>
                        <MenuItem value="/lotofacil" >Loto Facil</MenuItem>
                        <MenuItem value="/lotomania" >Loto Mania</MenuItem>
                        <MenuItem value="/" >Mega-Sena</MenuItem>
                        <MenuItem value="/quina" >Quina</MenuItem>
                        <MenuItem value="/timemania" >Time Mania</MenuItem>
                    </Select>
                    <Button style={theme.palette.megaSena}>Ir para concurso</Button>
                </FormControl>
               
                {
                    states && loteria && loteria[0] &&
                    <NameLoteria>{loteria[0].nome}</NameLoteria>
                }

                <Concurso>CONCURSO</Concurso>
                <Data>02/08/2022</Data>

            </LoteryDiv>
            
        {/* </MainContainerU > */}
        <NumberDiv>

            {concursosById && states && loteriaConcurso[0] && <ShowBall LoteriaConcurso={0} />}
            </NumberDiv>
        </EstructureDiv>    
        </ThemeProvider>
    )
}

export default MegeSena