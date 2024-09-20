import React from 'react'
import { useNavigate } from 'react-router-dom'

const Brancehs = () => {
    const navigate = useNavigate();
    return (
      <div>
          <div>Brancehs</div>
            <button onClick={() => navigate("/")} >go to home</button>
      </div>
  )
}

export default Brancehs