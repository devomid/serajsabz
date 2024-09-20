import React from 'react'
import { useNavigate } from 'react-router-dom';

const OurTeam = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div>OurTeam</div>
            <button onClick={() => navigate("/")} >go to home</button>

        </div>
    )
}

export default OurTeam