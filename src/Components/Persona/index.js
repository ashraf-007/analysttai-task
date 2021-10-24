import React from 'react'
import persona from '../../images/persona-infos.JPG'
import './persona.css'
const Persona = () => {
    return (
        <div className='persona'>
           <img src={persona} alt="" /> 
           <div className='persona-text'>
                <h2>Take The Lead Now!</h2>
                <p>Subscribe Now and get 5 Free Credits with the most intelligent AI Powered Real-time Prospecting Engine.</p>
<button className='nav-btn'>Get Started</button>
           </div>
        </div>
    )
}

export default Persona
