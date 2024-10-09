import { Box, Button, Grid, Input, Stack, Textarea, Typography } from '@mui/joy';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const FooterPage = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <Box component={'div'} data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" sx={{ height: '40vh', backgroundColor: 'rgba(72, 77, 44, 0.8)', marginBottom: 25, marginLeft: 5, marginRight: 5, borderRadius: 'lg', backdropFilter: 'blur(5px) saturation(120%)', padding: 3 }}>
            <Grid container spacing={{ xs: 1, sm: 1, md: 1, lg: 10, xl: 10 }} columns={{ xs: 6, sm: 12, md: 12, lg: 16, xl: 18 }} sx={{ flexGrow: 1 }}>

                <Grid xs={6} sm={12} md={12} lg={3} xl={3} >
                    <Typography level='h3' sx={{ color: 'white' }}>
                        Contact Us
                    </Typography>
                </Grid>

                <Grid xs={4} sm={8} md={6} lg={7} xl={7} sx={{ display: { xs: 'none', sm: 'none', md: 'inline-block', lg: 'inline-block', xl: 'inline-block' } }}>
                    <Stack spacing={3} sx={{ marginTop: '7vh' }}>
                        <Input type='email' fullWidth placeholder='Email address' />
                        <Textarea sx={{ width: '100%' }} placeholder='What is in your mind?' minRows={4} />
                        <Button color='success' fullWidth sx={{ alignSelf: 'self-end' }}>Send your toughts</Button>
                    </Stack>
                </Grid>

                <Grid xs={6} sm={4} md={6} lg={6} xl={8}>
                    <Stack spacing={2.7} sx={{ marginTop: '7vh', marginLeft: 5 }}>
                        <Button variant='outlined' fullWidth sx={{ color: 'darkseagreen', height: '6.5vh' }}>
                            Telegram
                        </Button>
                        <Button variant='outlined' fullWidth sx={{ color: 'darkseagreen', height: '6.5vh' }}>
                            Instagram
                        </Button>
                        <Button variant='outlined' fullWidth sx={{ color: 'darkseagreen', height: '6.5vh' }}>
                            call  +98 937 101 40 45
                        </Button>
                    </Stack>
                </Grid>

            </Grid>
        </Box >
    )
}

export default FooterPage