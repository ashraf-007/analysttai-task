import React from 'react'
import './footer.css'
import logo from '../../images/logo-white.png'
import { column1 , column2 , row } from '../../data'
const Footer = () => {
    return (
    <footer>
        <div className='footer'>
            <div className="el1">
                <img src={logo} alt="" />
                <p>Leadzen.ai is the most intelligent lead generation tool as it integrates artificial intelligence and real-time updates into the prospecting process.</p>
                <ul className='flex justify-start items-center'>
                    <li>
                        <button><i class="fab fa-facebook-f"></i></button>
                    </li>
                    <li>
                        <button><i class="fab fa-twitter"></i></button>
                    </li>
                    <li>
                        <button><i class="fab fa-linkedin-in"></i></button>
                    </li>
                    <li>
                        <button><i class="fab fa-instagram"></i></button>
                    </li>
                </ul>
                <p className="email">support@leadzen.ai</p>
            </div>
            <div id='column1' className="column">
            <h2>leadzen.ai</h2>

                <ul>
                { column1.map((el)=>(
                    <li key={el.id}>
                        <button>{el.text}</button>
                    </li>

                ))}
                </ul>

            </div>
            <div id='column2' className="column">
            <h2>leadzen.ai For</h2>

                <ul>

                { column2.map((el)=>(
                    <li key={el.id}>
                        <button>{el.text}</button>
                    </li>

                ))}
                </ul>

            </div>
            <div id='blog-pricing'>
                <ul>
                    <li>
                        <button>Blog</button>
                    </li>
                    <li>
                        <p className='pricing-btn'>Pricing</p>
                    </li>
                </ul>
            </div>
            
        </div>
        <div id='bottom' className='bottom'>
                    <div className='flex justify-center items-center flex-wrap'>
                        { row.map((el)=>(
                            <p key={el.id}>{el.text}</p>
                        ))}

                    </div>
        </div>
        </footer>

    )
}

export default Footer
