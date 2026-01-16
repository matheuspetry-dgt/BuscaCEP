import { useContext } from "react";
import { Typography, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import { MapPin, Sun, Moon } from "lucide-react";
import { ThemeContext } from "../../contexts/ThemeContext";

export const Header = () => {
  const { toggleTheme, mode } = useContext(ThemeContext);

  return (
    <Box
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 5,
        p: 2,
        borderBottom: 1,
      }}
    >
      <Box component='div' sx={{ display: 'flex', alignItems: 'center', gap: 5}}>
        <MapPin size={24} />
        <Typography
          variant="h1"
          sx={{
            fontSize: 30,
            fontWeight: 600,
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          BuscaCEP
        </Typography>
      </Box>
      <IconButton onClick={toggleTheme} color="inherit">
        {mode === "dark" ? <Sun /> : <Moon />}
      </IconButton>
    </Box>
  );
};
