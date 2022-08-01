import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useForm from '../../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { useGlobal } from '../../context/global/GlobalStateContext';


export default function InputText({setShowInfoInCart, setShowMessage}) {
    const {form, onChange} = useForm({id:""})
    const {setters} = useGlobal()
    const {setOrderInfo} = setters

    const getOrder = async (id)=>{
        await axios.get(`${BASE_URL}/api/orders/${id}`)
        .then((res)=>{
            setOrderInfo(res.data)
            setShowMessage(false)
            setShowInfoInCart(true)
            if(!res.data){
              setShowInfoInCart(false)
            }
        })
        .catch((err)=>{
            console.log(err);
            setShowInfoInCart(false)
        })

    }
    const onSubmitForm = (event) => {
        event.preventDefault()
        getOrder(Number(form.id));
    }
  return (
    <form onSubmit={onSubmitForm}>
    <Box
      sx={{
        width: 300,
        maxWidth: '100%',
      }}
    >
       <TextField 
                    name={'id'}
                    value={form.id}
                    onChange={onChange}
                    label={'Buscar pedido pela ID'}
                    variant={'outlined'}
                    margin={'dense'}
                    fullWidth
                    type={'number'} />
    </Box>
    </form>
  );
}