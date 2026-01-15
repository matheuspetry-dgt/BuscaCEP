import { Box, Typography } from "@mui/material"


export const Rodape = () => {
    return (
        <Box component='footer' sx={{ borderTop: 1, textAlign: 'center', p: 5, mt: 'auto' }}>
            <Typography>&copy; Desenvolvido por <strong>Matheus</strong></Typography>
        </Box>
    )
}