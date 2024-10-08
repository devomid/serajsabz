import { Button, ButtonGroup, Divider, Modal, ModalClose, Sheet, Typography } from '@mui/joy';
import React from 'react'
import { Transition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';
import { GeneralState } from '../../contexts/generalContext';

const MenueModal = ({ open, setOpen }) => {
    const navigation = useNavigate();
    const { isHome, setIsHome } = GeneralState();

    return (
        <Modal
            aria-labelledby="close-modal-title"
            open={open}
            onClose={() => {
                setOpen(false);
            }}
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
            <Sheet variant="outlined" sx={{ minWidth: 300, borderRadius: 'lg', p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, backgroundColor: 'rgba(12, 75, 83, 0.3)', paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, border: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(3px) saturate(220%)', border: '1px solid rgba(209, 213, 219, 0.3)' }}>
                <Button onClick={() => {
                    navigation('/ourStory');
                    setIsHome(false);
                    setOpen(false);
                }} variant='plain'>
                    <Typography sx={{ color: 'white' }} level='h4' color='primary'>
                        Our Story
                    </Typography>
                </Button>
                <Divider orientation='vertical' />
                <Button onClick={() => {
                    navigation('/ourServices');
                    setIsHome(false);
                    setOpen(false);
                }} variant='plain'>
                    <Typography sx={{ color: 'white' }} level='h4' color='primary'>
                        Our Services
                    </Typography>
                </Button>
                <Divider orientation='vertical' />
                <Button onClick={() => {
                    navigation('/ourCustomers');
                    setIsHome(false);
                    setOpen(false);
                }} variant='plain'>
                    <Typography sx={{ color: 'white' }} level='h4' color='primary'>
                        Our Customers
                    </Typography>
                </Button>
                <Divider orientation='vertical' />
                <Button onClick={() => {
                    navigation('/ourteam');
                    setIsHome(false);
                    setOpen(false);
                }} variant='plain'>
                    <Typography sx={{ color: 'white' }} level='h4' color='primary'>
                        Our Team
                    </Typography>
                </Button>
            </Sheet>
        </Modal>

    )
}

export default MenueModal