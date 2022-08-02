import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Router from './routes/router'
import theme from './constants/theme';
import GlobalState from './context/global/GlobalState';


function App() {
  return (
  <ThemeProvider theme={theme}>
    <GlobalState>
    <Router />
    </GlobalState>
  </ThemeProvider>
  )
}

export default App 