import { Container, createTheme, ThemeProvider } from "@mui/material";
import { Header } from "./components/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { Main } from "./components/Main";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121858",
    },
    typography: {
      fontFamily: "Montserrat",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Header />
        <Main />
      </Container>
    </ThemeProvider>
  );
}

export default App;
