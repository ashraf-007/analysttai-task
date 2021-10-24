import React from 'react'
import './card.css'
const Card = ({ card }) => {
    return (
        <div className='card'>
            <div className='card-head'>
                { card.title}
            </div>
            <div className='card-detail'>
                { card.d1}
            </div>
            <div className='card-detail'>
            { card.d2}
            </div>
            <div className='card-detail'>
            { card.d3}
            </div>
            <div className='price'>
                { card.price }
            </div>
            { card.buy && 
             <div className='buy'>
             {  card.buy}
             </div>
            }
           
        </div>
    )
}

export default Card
