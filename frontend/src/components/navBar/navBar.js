import React from 'react';
import { Box, IconButton, Typography } from "@mui/joy";
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';

const NavBar = () => {
    return (
        <Box sx={{ backgroundColor: 'transparent', display: 'flex', justifyContent: 'end', alignItems: 'center', padding: 2, zIndex: 100, marginTop: 2 }}>

            <Box sx={{ width: '10%', display: 'flex', justifyContent: 'space-evenly' }}>
                <IconButton sx={{ color: 'white' }}>
                    <LanguageIcon sx={{ height: 30, width: 30 }} />
                </IconButton>
                <IconButton sx={{ color: 'white' }}>
                    <MenuIcon sx={{ height: 30, width: 30 }} />
                </IconButton>
            </Box>
        </Box>
    )
}

export default NavBar;