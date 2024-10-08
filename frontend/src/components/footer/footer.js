import { Box, Typography } from '@mui/joy'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
import { IconButton } from '@mui/joy';
import { GeneralState } from '../../contexts/generalContext';

const Footer = () => {
    const { isHome, setIsHome } = GeneralState();
    return (
        <Box sx={{ display: 'flex', justifyContent: 'end', flexDirection: 'row', alignItems: 'center', padding: 5, backgroundColor: isHome ? 'transparent' : 'rgba(12, 75, 83, 0.7)', gap: 3, height: '2px', backdropFilter: isHome ? '' : 'blur(5px) saturate(150%)' }}>
            <IconButton sx={{ color: 'white', padding: 0.5 }} onClick={() => window.open('https://www.instagram.com/')}>
                <InstagramIcon sx={{ height: 35, width: 35 }} />
            </IconButton>
            <IconButton sx={{ color: 'white' }} onClick={() => window.open('https://t.me/SS4045')} >
                <TelegramIcon sx={{ height: 35, width: 35, padding: 0.5 }} />
            </IconButton>
            <IconButton sx={{ color: 'white' }} onClick={() => window.open(`tel:+989371014045`)} >
                <CallIcon sx={{ height: 35, width: 35, padding: 0.5 }} />
            </IconButton>
        </Box >
    )
}

export default Footer;