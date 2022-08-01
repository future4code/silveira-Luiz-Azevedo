import axios from 'axios'
import { BASE_URL } from '../constants/urls';
import {goToAdmin, goToIndex} from '../routes/coordinator'



export   const login = (body, clear, navigate) =>{
    const url = `${BASE_URL}/api/users/login`;
    const headers = {
            'Content-Type': 'application/json'
    }
    axios.post(url, body, headers)
    .then((response) =>{
        console.log(response);
        localStorage.setItem("token", response.data.token)
        goToIndex(navigate)
        clear()
    })
    .catch((error) =>{
        if(error.response.data.message === undefined){
        alert(error.response.data)
        console.log(error.response.data)
        } else {
            alert(error.response.data.message)
        console.log(error.response.data.message)
        }
    })
}

export   const signup = (body, clear, navigate) =>{
    const url = `${BASE_URL}/api/users/signup`;
    const headers = {
            'Content-Type': 'application/json'
    }
    axios.post(url, body, headers)
    .then((response) =>{
        localStorage.setItem("token", response.data.token)
        goToIndex(navigate)
        clear()
    })
    .catch((error) =>{
        if(error.response.data.message === undefined){
            alert(error.response.data)
            console.log(error.response.data)
            } else {
                alert(error.response.data.message)
            console.log(error.response.data.message)
            }
    })
} 

export const deletePizza = (id, request) =>{
    const url = `${BASE_URL}/api/pizzas/${id}`;
    axios.delete(url)
    .then((res)=>{
    console.log(res);
    request()
    })
    .catch((err)=>{
        console.log(err);
    })

}

export   const addPizza = (body, clear, navigate) =>{
    const url = `${BASE_URL}/api/pizzas`;
    const headers = {
            'Content-Type': 'application/json'
    }
    axios.post(url, body, headers)
    .then((response) =>{
        goToAdmin(navigate)
        clear()
    })
    .catch((error) =>{
        if(error.response.data.message === undefined){
            alert(error.response.data)
            console.log(error.response.data)
            } else {
                alert(error.response.data.message)
            console.log(error.response.data.message)
            }
    })
} 