import { createTheme } from "@mui/material";



const theme = createTheme({
    palette: {
        primary: { // works
          main: '#165788',
          contrastText: '#fff',
        },
        secondary: { // works
          main: '#69BE28',
          contrastText: '#fff',
        },
        companyBlue: {
            backgroundColor: '#65CFE9',
            color: '#fff',
        },
        companyRed: { 
            backgroundColor: '#E44D69',
            color: '#000',
        },
        megaSena: {
            backgroundColor: '#6BEFA3',
            color: '#fff',
        }
    }
});
export default theme;