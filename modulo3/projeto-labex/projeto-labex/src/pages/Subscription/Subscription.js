import React from 'react'

export default function Subscription() {
  return (
    <div>
      <form >
                <select defaultValue="" >
                    <option value="" disabled>Escolha uma Viagem</option>
                    {/* {tripsOptions} */}
                </select>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    // value={form.name}
                    // onChange={onChange}
                    pattern={"^.{3,}$"}
                    title={"O nome deve ter no mínimo 3 caracteres"}
                    required
                />
                <input
                    placeholder={"Idade"}
                    type={"number"}
                    name={"age"}
                    // value={}
                    // onChange={onChange}
                    required
                    min={18}
                />
                <input
                    placeholder={"Texto de Candidatura"}
                    name={"applicationText"}
                    // value={form.applicationText}
                    // onChange={onChange}
                    required
                    pattern={"^.{30,}$"}
                    title={"O texto deve ter no mínimo 30 caracteres"}
                />
                <input
                    placeholder={"Profissão"}
                    name={"profession"}
                    // value={form.profession}
                    // onChange={onChange}
                    required
                    pattern={"^.{10,}$"}
                    title={"A profissão deve ter no mínimo 10 caracteres"}
                />
                <select
                    placeholder={"País"}
                    name={"country"}
                    // value={form.country}
                    // onChange={onChange}
                    required
                >
                    <option value={""} disabled>Escolha um País</option>
                    {/* {countries.map((country) => {
                        return <option value={country} key={country}>{country}</option>
                    })} */}
                </select>
                <div>
                    <button >Voltar</button>
                    <button type={"submit"}>Enviar</button>
                </div>
            </form>
            subs
    </div>
  )
}
