import React from 'react'
import './hero.css'
import cloud from '../../images/clouds.png'
import rocket from '../../images/rocket.png'
import flash from '../../images/flash.png'
import Feature from '../Feature'
import { features } from '../../data'
import { motion } from "framer-motion"

const Hero = () => {
    const rocketVariants={
        // initial:{
        //     y :[ -20 , 0 ],
        //     x: [ 0 , 10]
        // } ,
        animate : {
            y:[0 , 80 , 0],
            rotate: [10 ,0 ,10 ],
            transition:{ease: "linear",duration:3 ,repeat: Infinity }
        } 
    }
    const cloudVariants = {
        animate : {
           scale : [ 1 , 1.1 ,1],
           x:[0 , 10 ,0 , -10 , 0],

         transition:{ease: "linear",duration:3 ,repeat: Infinity }
        } 
    }
    const flashVariants = {
        animate : {
           scale : [ 1 , 1.2 ,1 ],

         transition:{ease: "linear",duration:1 ,repeat: Infinity }
        } 
    }
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,

          
          }
        }
      }
      
    
    return (
        <div className='hero '>

            <div className='hero-infos'>
                <motion.h1
                    initial={{ x:-650}}
                    animate={{ x:0}}
                    transition={{duration:1}}

                >Making Data Smarter</motion.h1>
                <motion.p
                 initial={{ x:-650}}
                 animate={{ x:0}}
                 transition={{duration:1 , delay:1}}
                >The Most Intelligent AI Powered Real-time Prospecting Engine.</motion.p>
                <motion.button 
                 initial={{ x:-650}}
                 animate={{ x:0}}
                 transition={{duration:1 , delay:2}}
                className='nav-btn'>Get Started With a Demo</motion.button>

                <motion.div
                    initial='hidden'
                    animate='show'
                variants={container}
                className='features'>
                  {  features.map((feature , index )=>(
                      <motion.div
                      key={feature}

                      >
                        <Feature feature={feature} index={index} />
                      </motion.div>
                    ))}
                </motion.div>
            </div>
            <div className='hero-images'>
                <motion.img 
                animate='animate'
                variants={rocketVariants}
                className='rocket' src={rocket} alt="" />
                <motion.img 
                animate='animate'
                variants={cloudVariants}
                className='cloud' src={cloud} alt="" />
                <motion.img
                animate='animate'
                variants={flashVariants}
                 className='flash' src={flash} alt="" />
            </div>
            
        </div>
    )
}

export default Hero

