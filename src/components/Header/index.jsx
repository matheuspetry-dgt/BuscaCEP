import { Typography } from '@mui/material';
import Box from '@mui/material/Box';


export const Header = () => {
    return (
        <Box component="div" sx={{ color: '#fff', }}>
            <Typography variant='h1' sx={{ fontFamily: 'Roboto'}}>BuscaCEP</Typography>
        </Box>
    )
}