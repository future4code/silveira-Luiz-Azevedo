import  {createMuiTheme}  from '@material-ui/core/styles';
import {primaryColor, secondaryColor} from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText:'white'
    },
    text: {
    primary: secondaryColor
    },
  },
});

export default theme;