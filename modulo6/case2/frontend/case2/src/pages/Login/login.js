import React from 'react'
import Button from '@material-ui/core/Button';
import { goToSignup}  from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { InputsContainer, ScreenContainer } from '../Signup/styled';
import LoginForm from './loginForm';
import { Body, SingupButton } from './styled';
import { GlobalStyle } from '../Index/styled';
import Footer from '../../components/Footer/Footer';
// import useUnProtectedPage from '../../hooks/useUnProtectedPage';

export default function Login() {
  // useUnProtectedPage()
  const navigate = useNavigate();

  return (
    <Body>
      <GlobalStyle />
    <ScreenContainer>
      <InputsContainer>
     <LoginForm />
      <SingupButton>
      <Button 
      onClick={() => goToSignup(navigate)}
      variant='text'
      color='primary'
      margin={'normal'}
      fullWidth>
        Ainda sem conta? Cadastre-se
      </Button>
      </SingupButton>
      </InputsContainer>
    </ScreenContainer>
<Footer />
    </Body>
  )
}