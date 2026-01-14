import {
  Paper,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";
import { useState } from "react";
import { buscarCep } from "../../services/api";
import { RotateCcw } from "lucide-react";

// Helper to get CEPs from localStorage
const getRecentCepsFromStorage = () => {
  const storedCeps = localStorage.getItem("recentCeps");
  return storedCeps ? JSON.parse(storedCeps) : [];
};

// Helper to save CEPs to localStorage
const saveRecentCepsToStorage = (ceps) => {
  localStorage.setItem("recentCeps", JSON.stringify(ceps));
};

export const CepNumber = () => {
  const [cepInput, setCepInput] = useState("");
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);
  const [recentCeps, setRecentCeps] = useState(getRecentCepsFromStorage());

  // Function to update the recent CEPs list
  const updateRecentCeps = (newCep) => {
    const updatedCeps = [
      newCep,
      ...recentCeps.filter((c) => c !== newCep),
    ].slice(0, 10);
    setRecentCeps(updatedCeps);
    saveRecentCepsToStorage(updatedCeps);
  };

  const handleSearch = (cepToSearch) => {
    setAddress(null);
    setError(null);

    buscarCep(cepToSearch)
      .then((response) => {
        if (response.data.erro) {
          setError("CEP não encontrado.");
          setAddress(null);
        } else {
          setAddress(response.data);
          setError(null);
          // Add to recent list only on successful search
          updateRecentCeps(response.data.cep.replace("-", ""));
        }
      })
      .catch(() => {
        setError("Não foi possível buscar o CEP. Tente novamente.");
        setAddress(null);
      });
  };

  const handleInputChange = (e) => {
    const valorCep = e.target.value.replace(/\D/g, "");
    setCepInput(valorCep);
    if (valorCep.length === 8) {
      handleSearch(valorCep);
    } else {
      setAddress(null);
      setError(null);
    }
  };

  const handleRecentCepClick = (cep) => {
    setCepInput(cep);
    handleSearch(cep);
  };

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        gap: 5,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box component="div">
        <TextField
          value={cepInput}
          onChange={handleInputChange}
          label="Digite o CEP"
          variant="outlined"
          inputProps={{ maxLength: 8 }}
          sx={{
            bgcolor: "#474f97",
            borderRadius: 1,
            width: "100%",
            maxWidth: "300px",
          }}
        />
        {address && (
          <Paper
            elevation={3}
            sx={{
              p: 2,
              mt: 2,
              bgcolor: "#474f97",
              width: "100%",
              maxWidth: "300px",
            }}
          >
            <Typography>
              <strong>Logradouro:</strong> {address.logradouro}
            </Typography>
            <Typography>
              <strong>Bairro:</strong> {address.bairro}
            </Typography>
            <Typography>
              <strong>Cidade:</strong> {address.localidade}
            </Typography>
            <Typography>
              <strong>Estado:</strong> {address.uf}
            </Typography>
          </Paper>
        )}
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
      </Box>

      <Box component="div">
        {recentCeps.length > 0 && (
          <Paper
            elevation={3}
            sx={{
              p: 2,
              mt: 4,
              bgcolor: "#333b79",
              width: "100%",
              maxWidth: "300px",
            }}
          >
            <Typography variant="h6" sx={{ mb: 1 }}>
              CEPs Recentes
            </Typography>
            <List dense>
              {recentCeps.map((cep) => (
                <ListItem
                  key={cep}
                  secondaryAction={
                    <IconButton
                      edge="end"
                      aria-label="reuse"
                      onClick={() => handleRecentCepClick(cep)}
                    >
                      <RotateCcw />
                    </IconButton>
                  }
                  sx={{ bgcolor: "#474f97", mb: 1, borderRadius: 1 }}
                >
                  <ListItemText primary={cep} />
                </ListItem>
              ))}
            </List>
          </Paper>
        )}
      </Box>
    </Box>
  );
};
