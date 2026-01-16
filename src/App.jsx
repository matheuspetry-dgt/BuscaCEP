import { Container } from "@mui/material";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Rodape } from "./components/Rodape";

function App() {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", minHeight: '100vh', py: 4 }}>
      <Header />
      <Main />
      <Rodape />
    </Container>
  );
}

export default App;
