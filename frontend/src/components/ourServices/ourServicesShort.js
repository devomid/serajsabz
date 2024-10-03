import React from 'react'
import { Box, Link, Typography } from '@mui/joy';
import { useNavigate } from 'react-router-dom';
import { GeneralState } from '../../contexts/generalContext';

const OurServicesShort = () => {
    const navigate = useNavigate();
    const { isHome, setIsHome } = GeneralState();
    
    return (
        <Box sx={{ width: '95%', height: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: 5 }}>

            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box>
                    <Typography sx={{ color: 'white' }} level='h2'>
                        Our services
                    </Typography>
                </Box>

                <Box>
                    <Typography sx={{ color: 'white' }} level='h3'>
                        We give you the solution!
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ width: '50%', height: '40%' }}>
                <img onClick={() => {
                    navigate('/ourServices'); 
                    setIsHome(false);
                }} width={'100%'} height={'75%'} src='https://media.istockphoto.com/id/1414896610/de/vektor/moderne-kreative-unserer-dienstleistungen-banner-template-mit-6-optionen-wie-visuelles.jpg?s=612x612&w=0&k=20&c=toV2gPtdjA_H2QoTpUvDRfTudqroAxO4zOizNxD4UQo=' />
                <Box sx={{ width: '100%', height: '30%', padding: 1, overflow: 'hidden' }}>
                    <Typography sx={{ color: 'white', truncate: true, overflow: 'hidden', textOverflow: 'ellipsis', textAlign: 'left' }}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance.
                    </Typography>
                    <Link href={'/ourServices'}>See more...</Link>
                </Box>
            </Box>
        </Box>
    )
}

export default OurServicesShort;

