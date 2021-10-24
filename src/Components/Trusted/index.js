import React , { useRef , useState , useEffect } from 'react'
import { trusted } from '../../data'
import { Rerousel } from 'rerousel';
import { motion , useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";

import './trusted.css'
const Trusted = () => {
    const ref = useRef(null);
const control = useAnimation()
const [ref1, isInView] = useInView();
const [first, setFirst ] = useState(true)
const showElement = {

    hidden: { opacity: 0 },
    visible: { 
      opacity: [0, 1], 
      transition: { duration: 0.5 , ease:'easeIn' ,
  }}

  };
useEffect(() => {

    if(first){
        if (isInView) {
            control.start('visible');
          setFirst(false)
        }
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
      }, [control , isInView ]);

    return (
        <div className='trusted'>
            <motion.h1
             variants={showElement}
             animate={control}
             ref={ref1}
            initial='hidden'
            >Trusted By</motion.h1>
        <Rerousel itemRef={ref} interval={2000} >
            { trusted.map((el)=>(
                <div key={el.src} ref={ref} >
                <img src={el.src} alt="" />
                </div>
            ))}
            </Rerousel>
        {/* </div> */}
        <p>...and many more</p>
     
        </div>

    )
}
export default Trusted
