import React from 'react'
import './feature.css'
import { motion } from "framer-motion";


const Feature = ({ feature : { text , icon} , index }) => {
    const item = {
        hidden: { opacity: 0 , scale:0 },
        show: { opacity: 1 , scale: [ 0 , 1.1 ,1 ],
            transition : {
                duration : 0.5,
                delay : index === 1 ? 1 : index === 2 ? 2 : 0
            }
         }
      }
    return (
        <motion.div 
        initial='hidden'
        animate='show'
        variants={item}
        className='feature'>
            <div className='icon-container'>
            <img src={icon} alt="" />
            </div>
            <p>{text}</p>
        </motion.div>
    )
}

export default Feature
