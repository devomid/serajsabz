import { Box, Typography } from '@mui/joy'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
import { IconButton } from '@mui/joy';

const Footer = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', padding: 5, backgroundColor: 'black' }}>
            <Box>
                <Typography sx={{ color: 'white' }}>
                    lorem
                </Typography>
            </Box>

            <Box>
                <IconButton sx={{ color: 'white' }}>
                    <InstagramIcon />
                </IconButton>
                <IconButton sx={{ color: 'white' }}>
                    <TelegramIcon />
                </IconButton>
                <IconButton sx={{ color: 'white' }}>
                    <CallIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Footer