import React from 'react'
import { useNavigate } from 'react-router-dom';

const OurCustomers = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div>OurCustomers</div>
            <button onClick={() => navigate("/")} >go to home</button>
        </div>
    )
}

export default OurCustomers