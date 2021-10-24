import React , { useState , useEffect } from 'react'
import book from '../../../images/book.png'
import './pricingHero.css'
import { motion , useAnimation } from 'framer-motion'
const PricingHero = () => {
    const control = useAnimation()
    const [first, setFirst ] = useState(true)
    const showElement = {
    
        hidden: { opacity: 0  , x:700},
        visible: { 
          opacity: [0, 1], 
          x:[ 700, 0 ], 
          transition: { duration: 1 , ease:'easeIn' ,
      }}
    
      };
    useEffect(() => {
        if(first){
            // if (isInView) {
                control.start('visible');
              setFirst(false)
            // }
        }
          }, [control]);
    
    return (
        <div className='pricing-hero'>
            <div className='pricing-image'>
                <img src={book} alt="" />
            </div>
            <motion.div
            variants={showElement}
            animate={control}
            // ref={ref1}
             initial='hidden'
            
             className='pricing-hero-text'>
                <h1> <span>Unlimited</span> Freemium</h1>
                <h2>Smart Data at Smart Prices</h2>
                <p>Compare packages and find the one that works best for you.</p>
                <button className='nav-btn'>Get Started with a demo</button>
            </motion.div>
        </div>
    )
}

export default PricingHero
