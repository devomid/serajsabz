import { Box, Button, Input, Textarea, Typography } from '@mui/joy';
import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
import { IconButton } from '@mui/joy';

const FooterPage = () => {
    return (
        <Box sx={{ height: '40vh', backgroundColor: 'rgba(14, 59, 65, 0.8)', marginBottom: 25, marginLeft: 5, marginRight: 5, borderRadius: 'lg' }}>
            <Box sx={{ padding: 5, display: 'flex', justifyContent: 'start' }}>
                <Typography level='h3' sx={{ color: 'white' }}>
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
                        serajsabz.telegram.com
                    </Typography>
                    <Typography sx={{ color: 'white' }}>
                        +98 937 101 40 45
                    </Typography>
                </Box>

                <Box sx={{ marginLeft: 60, display: 'flex', gap: 2, flexDirection: 'column', width: '30%', justifyContent: 'center', alignItems: 'center' }}>
                    <Input fullWidth placeholder='Email address' />
                    <Textarea sx={{ width: '100%' }} placeholder='What is in your mind?' minRows={4} />
                    <Button sx={{ alignSelf: 'self-end' }}>Send your toughts</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default FooterPage