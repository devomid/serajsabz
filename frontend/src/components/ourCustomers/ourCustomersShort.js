import React, { useEffect } from 'react'
import { Box, Grid, Link, Typography } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { GeneralState } from '../../contexts/generalContext';
import Aos from 'aos';
import 'aos/dist/aos.css'

const OurCustomersShort = ({ fadeClass }) => {
    const navigate = useNavigate();
    const { isHome, setIsHome } = GeneralState();
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <Grid container spacing={{ xs: 2, md: 3, lg: 5, xl: 8 }} columns={{ xs: 6, sm: 12, md: 12, lg: 16, xl: 18 }} sx={{ flexGrow: 1, alignItems: "center", padding: '0% 5vw 5% 5%' }}>

            <Grid xs={5} sm={12} md={8} lg={9} xl={10}>
                <img style={{ objectFit: 'cover' }} data-aos="fade-right" data-aos-duration="1700" onClick={() => {
                    navigate('/ourStory');
                    setIsHome(false);
                }} width={'100%'} height={'100%'} src='https://www.system-form.com/wp-content/uploads/2023/02/R1.jpg' />

                <Typography maxHeight={'200px'} component={'div'} data-aos="fade-left" data-aos-duration="950" sx={{ width: '100%', color: 'white', truncate: true, overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'left', marginRight: 2, marginTop: 2 }}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text.
                </Typography>
            </Grid>

            <Grid sm={'none'} md={4} lg={7} xl={8} sx={{ textAlign: 'end' }}>
                <Typography component={'div'} data-aos="fade-left" data-aos-duration="1500" sx={{ color: 'white' }} level='h2'>
                    Our Customers
                </Typography>

                <Typography component={'div'} data-aos="fade-right" data-aos-duration="1000" sx={{ color: 'white' }} level='h3'>
                    We give you the solution!
                </Typography>
            </Grid>
        </Grid>
    )
}

export default OurCustomersShort;

