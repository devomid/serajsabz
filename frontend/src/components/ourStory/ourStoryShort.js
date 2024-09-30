import React from 'react'
import { Box, Typography } from '@mui/joy';
import { Link } from 'react-router-dom';

const OurStroryShort = () => {
    return (
        <Box sx={{ width: '95%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: 5 }}>

            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box>
                    <Typography sx={{ color: 'white' }} level='h2'>
                        Seraj Sabz
                    </Typography>
                </Box>

                <Box>
                    <Typography sx={{ color: 'white' }} level='h3'>
                        We give you the solution!
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ width: '50%', height: '40%' }}>
                <img width={'100%'} height={'100%'} src='https://lh5.googleusercontent.com/proxy/8AeJdhLi4d4pe1lPlpFAQ4ix9oDfYnD8a8iFruNYt5ROzQ6hFsdm24g5Ie7MXunZA0q6ayJEA36yHxyy2U02j2Noe3Pz0bLOySzl8jrtNLka6b2BvVf7DlEgb3_vdM54DzAu3sIB1B9HafI2ZuKDpI5_' />
                <Box sx={{ width: '100%', height: '30%', padding: 1, overflow: 'hidden' }}>
                    <Typography sx={{ color: 'white', truncate: true, overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'left', marginRight: 2 }}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                    </Typography>
                    <Link>See more...</Link>
                </Box>
            </Box>
        </Box>
    )
}

export default OurStroryShort;