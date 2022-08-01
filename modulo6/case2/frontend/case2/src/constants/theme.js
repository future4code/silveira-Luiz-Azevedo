import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { primaryColor, secondaryColor } from './colors';

const theme = createTheme({
    palette: {
        primary: {
            main: `${primaryColor}`,
        },
        secondary: {
            main: `${secondaryColor}`,
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme; 