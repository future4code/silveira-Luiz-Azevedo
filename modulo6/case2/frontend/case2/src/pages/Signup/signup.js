import React from 'react'
import useForm from '../../hooks/useForm'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import { Body, ScreenContainer, SingupButton } from './styled';
import { signup } from '../../services/user';
import { useNavigate } from 'react-router-dom';
import { GlobalStyle } from '../Index/styled';
import Footer from '../../components/Footer/Footer';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

export default function SignUp() {
    const navigate = useNavigate()
    useUnprotectedPage()
  const {form, onChange, clear} = useForm({ username:"", email: "", password: "" })//puxando a estrutura do useState e do OnChange
    const onSubmitForm = (event) => {
        event.preventDefault()//importante para não mostrar a senha na url após o submit
        signup(form, clear, navigate)
    }

  return (
    <Body>
      <GlobalStyle />
      <main>
      <ScreenContainer>
        {/* <LogoImg src={logo} /> */}
            <form onSubmit={onSubmitForm}>
            <TextField //input do @mui com as próprias propriedades
                    name={'username'}
                    value={form.username}
                    onChange={onChange}
                    label={'Nome de Usuário'}
                    variant={'outlined'}
                    margin={'dense'}
                    fullWidth />
                <TextField //input do @mui com as próprias propriedades
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    label={'E-mail'}
                    variant={'outlined'}
                    margin={'dense'}
                    fullWidth
                    type={'email'} />
                <TextField
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    label={'Senha'}
                    variant={'outlined'}
                    margin={'dense'}
                    fullWidth
                    type={'password'} />
                <SingupButton>
                    <Button
                        type={'submit'}
                        variant='contained'
                        color='primary'
                        margin={'normal'}
                        fullWidth>
                        Cadastrar
                    </Button>
                </SingupButton>
            </form>
            </ScreenContainer>
      </main>
<Footer />
    
            </Body>
  )
}