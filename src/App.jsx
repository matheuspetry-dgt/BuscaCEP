import { Container, createTheme, ThemeProvider } from "@mui/material";
import { Header } from "./components/Header";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121858",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
