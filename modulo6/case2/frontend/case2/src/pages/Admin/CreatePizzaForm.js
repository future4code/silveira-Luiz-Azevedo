import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { Body, GlobalStyle, SingupButton } from './styled'
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { addPizza } from '../../services/user';
import { ScreenContainer } from '../Signup/styled';
import Footer from '../../components/Footer/Footer';

function CreatePizzaForm() {
    const { form, onChange, clear } = useForm({ name: "", price: "", ingredients: "" })//puxando a estrutura do useState e do OnChange
    const navigate = useNavigate();

    const onSubmitForm = (event) => {
        event.preventDefault()//importante para não mostrar a senha na url após o submit
        addPizza(form, clear, navigate)
    }


    return (
        <Body>
            <GlobalStyle />
            <main>
                <ScreenContainer>
                    {/* <LogoImg src={logo} /> */}
                    <form onSubmit={onSubmitForm}>
                        <TextField //input do @mui com as próprias propriedades
                            name={'name'}
                            value={form.name}
                            onChange={onChange}
                            label={'Pizza'}
                            variant={'outlined'}
                            margin={'dense'}
                            fullWidth
                            type={'text'} />
                        <TextField
                            name={'price'}
                            value={form.price}
                            onChange={onChange}
                            label={'Preço'}
                            variant={'outlined'}
                            margin={'dense'}
                            fullWidth
                            type={'number'} />
                        <TextField
                            name={'ingredients'}
                            value={form.ingredients}
                            onChange={onChange}
                            label={'Ingredientes'}
                            variant={'outlined'}
                            margin={'dense'}
                            fullWidth
                            type={'text'} />
                        <SingupButton>
                            <Button
                                type={'submit'}
                                variant='contained'
                                color='primary'
                                margin={'normal'}
                                fullWidth>
                                Criar
                            </Button>
                        </SingupButton>
                    </form>
                </ScreenContainer>
            </main>
            <Footer />

        </Body>
    )
}

export default CreatePizzaForm