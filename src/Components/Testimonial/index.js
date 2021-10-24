import React from 'react'
import './testimonial.css'
import test from '../../images/testimonial.JPG'


const Testimonial = () => {
    return (
        <div className='testimonial'>
            <div className="left-part">
            <h1> Our Clients Speak</h1>
            <p>
            Here’s what some of our clients have to say about Leadzen.ai

            </p>
            </div>
            <div className="right-part">
                <img src={test} alt="" />
            </div>
        </div>
    )
}

export default Testimonial
