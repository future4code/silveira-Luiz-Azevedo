import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import {goToFeed} from '../routes/coordinator'
export   const login = (body, clear, navigate) =>{
    const url = `${BASE_URL}/users/login`;
    const headers = {
            'Content-Type': 'application/json'
    }
    axios.post(url, body, headers)
    .then((response) =>{
        console.log(response)
        localStorage.setItem("token", response.data.token)
        clear()
        goToFeed(navigate)
    })
    .catch((error) =>{
        alert("Erro ao fazer login!")
    })
}