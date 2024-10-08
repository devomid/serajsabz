import React, { useState } from 'react';
import { Box, Dropdown, IconButton, ListItemDecorator, Menu, MenuButton, MenuItem, Typography } from "@mui/joy";
import MenuIcon from '@mui/icons-material/Menu';
import LanguageIcon from '@mui/icons-material/Language';
import icons from '../../constants/icons';
import MenueModal from '../menu modal/menueModal';
import { GeneralState } from '../../contexts/generalContext';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const { menuOpen, setMenuOpen, isHome, setIsHome } = GeneralState();
    const navigate = useNavigate();

    return (
        <Box sx={{ backgroundColor: isHome ? 'transparent' : 'rgba(12, 75, 83, 0.7)', display: 'flex', justifyContent: 'end', alignItems: 'center', padding: 2, backdropFilter: isHome ? '' : 'blur(5px) saturate(150%)' }}>
            <MenueModal open={menuOpen} setOpen={setMenuOpen} />

            <Box sx={{ width: '10%', display: 'flex', justifyContent: 'space-evenly' }}>
                {!isHome && (
                    <IconButton onClick={() => {
                        navigate('/');
                        setIsHome(true);
                    }} sx={{ color: 'white' }}>
                        <HomeOutlinedIcon sx={{ height: 30, width: 30 }} />
                    </IconButton>
                )}
                <Dropdown>
                    <MenuButton variant='plain'>
                        <IconButton sx={{ color: 'white' }}>
                            <LanguageIcon sx={{ height: 30, width: 30 }} />
                        </IconButton>
                    </MenuButton>
                    <Menu placement="bottom-start">
                        <MenuItem>
                            <ListItemDecorator>
                                <img loading="lazy" width="20" src={icons.persian} alt="persian" />
                            </ListItemDecorator>
                            <Typography textAlign={'right'}>
                                فارسی
                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <ListItemDecorator>
                                <img loading="lazy" width="20" src={icons.arabic} alt="persian" />
                            </ListItemDecorator>
                            <Typography textAlign={'right'}>
                                العربیه
                            </Typography>
                        </MenuItem>
                        <MenuItem>
                            <ListItemDecorator>
                                <img loading="lazy" width="20" src={icons.english} alt="persian" />
                            </ListItemDecorator>
                            <Typography textAlign={'right'}>
                                English(US)
                            </Typography>
                        </MenuItem>
                    </Menu>
                </Dropdown>

                <IconButton onClick={() => setMenuOpen(true)} sx={{ color: 'white' }}>
                    <MenuIcon sx={{ height: 30, width: 30 }} />
                </IconButton>


            </Box>
        </Box>
    )
}

export default NavBar;