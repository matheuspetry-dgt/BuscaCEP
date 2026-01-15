import { Container, createTheme, ThemeProvider } from "@mui/material";
import { Header } from "./components/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { Main } from "./components/Main";
import { Rodape } from "./components/Rodape";

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
      <Container sx={{ display: "flex", flexDirection: "column", minHeight: '100vh' }}>
        <Header />
        <Main />
        <Rodape />
      </Container>
    </ThemeProvider>
  );
}

export default App;
