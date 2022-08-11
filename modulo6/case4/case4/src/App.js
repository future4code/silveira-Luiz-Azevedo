import { ThemeProvider } from "@mui/material";
import theme from "./constants/theme";
import GlobalState from "./context/GlobalState";
import Router from "./routes/router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
    <Router />
      </GlobalState>
  </ThemeProvider>
  );
}

export default App;
