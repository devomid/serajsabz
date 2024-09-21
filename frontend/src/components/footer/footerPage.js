import { Box, Typography } from '@mui/joy'
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
import { IconButton } from '@mui/joy';

const FooterPage = () => {
    return (
        <Box sx={{ height: '100vh', backgroundColor: 'rgba(14, 59, 65, 0.8)' }}>
            <Box sx={{ padding: 5, display: 'flex', justifyContent: 'start' }}>
                <Typography sx={{ color: 'white' }}>
                    Contact Us
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'start', flexDirection: 'row', gap: 1 }}>

                <Box sx={{ display: 'flex', justifyContent: 'start', flexDirection: 'column', gap: 3, paddingLeft: 5, alignItems: 'center' }}>
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
                <Box sx={{ display: 'flex', justifyContent: 'start', flexDirection: 'column', gap: 5 }}>
                    <Typography sx={{ color: 'white' }}>
                        serajsabz.instagram.com
                    </Typography>
                    <Typography sx={{ color: 'white' }}>
                        serajsabz.instagram.com
                    </Typography>
                    <Typography sx={{ color: 'white' }}>
                        serajsabz.instagram.com
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default FooterPage