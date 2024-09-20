import { Box, Button } from '@mui/joy'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ height: '80vh', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Button sx={{ padding: 2 }} onClick={() => navigate("/branches")} >go to branches</Button>
            <Button sx={{ padding: 2 }} onClick={() => navigate("/ourCustomers")} >go to our customers</Button>
            <Button sx={{ padding: 2 }} onClick={() => navigate("/ourServices")} >go to our services</Button>
            <Button sx={{ padding: 2 }} onClick={() => navigate("/ourStory")} >go to our story</Button>
            <Button sx={{ padding: 2 }} onClick={() => navigate("/ourTeam")} >go to our team</Button>
        </Box>
    )
}

export default Home