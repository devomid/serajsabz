import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div>Home</div>
            <button onClick={() => navigate("/branches")} >go to branches</button>
            <button onClick={() => navigate("/ourCustomers")} >go to our customers</button>
            <button onClick={() => navigate("/ourServices")} >go to our services</button>
            <button onClick={() => navigate("/ourStory")} >go to our story</button>
            <button onClick={() => navigate("/ourTeam")} >go to our team</button>
        </div>
    )
}

export default Home