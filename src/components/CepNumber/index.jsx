import { Paper, TextField, Typography, Box } from "@mui/material";
import { useState } from "react";
import { buscarCep } from "../../services/api";

export const CepNumber = () => {
  const [cepInput, setCepInput] = useState("");
  const [address, setAddress] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const cepDigitado = e.target.value.replace(/\D/g, '').slice(0,8);
    setCepInput(cepDigitado);
    setAddress(null);
    setError(null);

    if (cepDigitado.length === 8) {
      buscarCep(cepDigitado)
        .then((response) => {
          if (response.data.erro) {
            setError("CEP não encontrado.");
            setAddress(null);
          } else {
            setAddress(response.data);
            setError(null);
          }
        })
    }
  };

  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        gap: 5,
        alignItems: "center",
        justifyContent: "center",
        mt: "auto",
      }}
    >
      <Box component="div">
        <TextField
          value={cepInput}
          onChange={handleInputChange}
          variant="filled"
          label="Digite o CEP"
          sx={{
            bgcolor: "primary.main",
            borderRadius: 1,
            width: "100%",
            maxWidth: "300px",
            '& .MuiInputBase-input': {
              color: 'primary.contrastText', 
            },
            '& .MuiFormLabel-root': {
              color: 'primary.contrastText',
              fontSize: 20
            },
            '& .MuiFormLabel-root.Mui-focused': {
              color: 'primary.contrastText', 
            },
          }}
        />
        {address && (
          <Paper
            elevation={3}
            sx={{
              p: 2,
              mt: 2,
              bgcolor: "primary.main",
              width: "100%",
              maxWidth: "300px",
              color: 'primary.contrastText'
            }}
          >
            <Typography color="inherit">
              <strong>Logradouro:</strong> {address.logradouro}
            </Typography>
            <Typography color="inherit">
              <strong>Bairro:</strong> {address.bairro}
            </Typography>
            <Typography color="inherit">
              <strong>Cidade:</strong> {address.localidade}
            </Typography>
            <Typography color="inherit">
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
    </Box>
  );
};
