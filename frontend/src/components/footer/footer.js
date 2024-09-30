import { Box, Typography } from '@mui/joy'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
import { IconButton } from '@mui/joy';

const Footer = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'end', flexDirection: 'row', alignItems: 'center', padding: 5, backgroundColor: 'transparent', gap: 3 }}>
            <IconButton sx={{ color: 'white', padding: 0.5 }}>
                <InstagramIcon sx={{ height: 35, width: 35 }} />
            </IconButton>
            <IconButton sx={{ color: 'white' }}>
                <TelegramIcon sx={{ height: 35, width: 35, padding: 0.5 }} />
            </IconButton>
            <IconButton sx={{ color: 'white' }}>
                <CallIcon sx={{ height: 35, width: 35, padding: 0.5 }} />
            </IconButton>
        </Box>
    )
}

export default Footer;