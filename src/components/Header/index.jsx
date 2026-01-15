import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { MapPin } from 'lucide-react';


export const Header = () => {
    return (
        <Box component="header" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 5, p: 5, borderBottom: 1 }}>
            <MapPin size={24}/>
            <Typography variant='h1' sx={{ fontSize: 30, fontWeight: 600 }}>BuscaCEP</Typography>
        </Box>
    )
}