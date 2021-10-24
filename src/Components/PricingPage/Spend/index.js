import React , { useState  , useEffect} from 'react'
import SpendItem from '../SpendItem'
import { spendData } from '../../../data'
import './spend.css'
import { motion , useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";



const Spend = () => {
    const [ref1, isInView] = useInView();
    const control = useAnimation()
    const [first, setFirst ] = useState(true)
    const showElement = {
    
        hidden: { opacity: 0 },
        visible: { 
          opacity: [0, 1], 
          y:[ 500, 0 ], 
          transition: { duration: 1.2 , ease:'easeIn' }}
    
      };
    useEffect(() => {
        if(first){
            if (isInView) {
                control.start('visible');
              setFirst(false)
            }
        }
          }, [control , isInView ]);
    return (

        <motion.div
        ref={ref1}
        initial='hidden'
        animate={control}
        variants={showElement}

        className='spend-container'>
            <h1>Spend credits on</h1>
            <div className='spends'>
            { spendData.map((item)=>(
            <SpendItem item={item} />
            ))}
            </div>

        </motion.div>
    )
}

export default Spend
