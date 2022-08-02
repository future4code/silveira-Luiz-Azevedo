import React from 'react'
import Button from '@material-ui/core/Button';
import { goToSignup}  from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { InputsContainer, ScreenContainer } from '../Signup/styled';
import LoginForm from './loginForm';
import { Body, SingupButton } from './styled';
import { GlobalStyle } from '../Index/styled';
import Footer from '../../components/Footer/Footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import useUnprotectedPage from '../../hooks/useUnprotectedPage';

export default function Login() {
  useUnprotectedPage()
  const navigate = useNavigate();

  return (
    <Body>
      <GlobalStyle />
    <ScreenContainer>
      <InputsContainer>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Área apenas para administradores
        </Typography>
      </CardContent>
      </Card>
     <LoginForm />
      <SingupButton>
      <Button 
      onClick={() => goToSignup(navigate)}
      variant='text'
      margin={'normal'}
      color='primary'
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