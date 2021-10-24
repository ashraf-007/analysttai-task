import React from 'react'
import './spendItem.css'
const SpendItem = ({ item }) => {
    return (
        <div className='item'>
          <h3>{item.title}</h3>
            <ul>
            { item.elements.map((el)=>(
                <li className='el'>
                    <i aria-hidden="true" class="fas fa-check"></i>
                    <span> {el}</span>
                    </li>
            ))}
            </ul>
        </div>
    )
}

export default SpendItem
