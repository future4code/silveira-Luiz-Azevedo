import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import useRequestData from '../../hooks/useRequestData'
import { paises } from '../../constants/países'
import axios from 'axios'
import { goToBack } from '../../routes/coordinator';

export default function Subscription() {
const navigate = useNavigate()

const {form, onChange, clearForm} = useForm({name: "", age: "", applicationText: "", profession: "", country:"", tripId: ""})

const [tripsList, isLoading] = useRequestData("https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-vinicius-silveira/trips", [])
const tripsOptions= tripsList && tripsList.map((t) => {
    return <option key={t.id} value={t.id}>{t.name}</option>
})


const countriesMap = paises.map((country) =>{
    return <option value={country.nome} key={country.ordem}>{country.nome}</option>
})

const fazerCadastro = (event)  =>{
    event.preventDefault();
    const body = {
        name: form.name,
        age: form.age,
        applicationText: form.applicationText,
        profession: form.profession,
        country: form.country
    }

    axios
    .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-vinicius-silveira/trips/${form.tripId}/apply`, body)
    .then((response) => {
        console.log("Formulário enviado!", response);
        clearForm()
    })
    .catch((err) => {
        console.log(err.response.message)
        event.preventDefault()
    })
    
}

  return (
    <div>
      <form onSubmit={fazerCadastro}>
                <select name={"tripId"} defaultValue="" onChange={onChange}>
                    <option value="" disabled>Escolha uma Viagem</option>
                    {tripsOptions}
                </select>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{3,}$"}
                    title={"O nome deve ter no mínimo 3 caracteres"}
                    required
                />
                <input
                    placeholder={"Idade"}
                    type={"number"}
                    name={"age"}
                    value={form.age}
                    onChange={onChange}
                    required
                    min={18}
                />
                <input
                    placeholder={"Texto de Candidatura"}
                    name={"applicationText"}
                    value={form.applicationText}
                    onChange={onChange}
                    required
                    pattern={"^.{30,}$"}
                    title={"O texto deve ter no mínimo 30 caracteres"}
                />
                <input
                    placeholder={"Profissão"}
                    name={"profession"}
                    value={form.profession}
                    onChange={onChange}
                    required
                    pattern={"^.{10,}$"}
                    title={"A profissão deve ter no mínimo 10 caracteres"}
                />
                <select
                    placeholder={"País"}
                    name={"country"}
                    value={form.country}
                    onChange={onChange}
                    required
                >
                    <option value={""} disabled>Escolha um País</option>
                    {countriesMap}
                </select>
                <div>
                    <button type={"submit"}>Enviar</button>
                </div>
            </form>
            <button onClick={() => goToBack(navigate)}>Voltar</button>
    </div>
  )
}
