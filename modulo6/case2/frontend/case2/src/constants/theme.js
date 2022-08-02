import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { primaryColor, secondaryColor } from './colors';

    const theme = createTheme({
        status: {
          danger: '#e53e3e',
        },
        palette: {
          primary: {
            main: primaryColor,
            darker: '#053e85',
          },
          neutral: {
            main: secondaryColor,
            contrastText: '#fff',
          },
        },
      });

export default theme; 