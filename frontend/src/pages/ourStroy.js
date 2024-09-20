import React from 'react'
import { useNavigate } from 'react-router-dom';

const OurStory = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div>OurStory</div>
            <button onClick={() => navigate("/")} >go to home</button>
        </div>
    )
}

export default OurStory