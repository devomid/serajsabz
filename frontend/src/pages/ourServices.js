import React from 'react'
import { useNavigate } from 'react-router-dom';

const OurServices = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div>OurServices</div>
            <button onClick={() => navigate("/")} >go to home</button>
        </div>
    )
}

export default OurServices