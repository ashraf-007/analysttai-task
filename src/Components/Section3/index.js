import React  , { useState , useEffect } from 'react'
import './section3.css'
import {helpInfos} from '../../data'
import Element from '../Element'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const Section3 = () => {
const [ curr , setCurr ] = useState(1)
const [ isMobile , setIsMobile ] = useState(false)
const showElement = {
    visible: { opacity: [0 ,1], x:[ -600 ,0] , transition: { duration: 1 , ease:'easeIn'} },
    hidden: { opacity: 0, x:-600 }
  };
  const showElement2 = {
    visible: { opacity:[0, 1],scale:1, transition: { duration: 1 , ease:'easeIn'} },
    hidden: { opacity: 0, scale:0 }
  };
  const [firstTime , setFirstTime  ] = useState(true)
const control1 = useAnimation();
const [ref, inView] = useInView();

useEffect(() => {
    if(firstTime){
        if (inView) {
            control1.start("visible");
            setFirstTime(false)
          }
    }
  }, [control1 , inView]);
 
let [wid , setWid ] = useState(window.innerWidth)

useEffect(() => {
   window.addEventListener('resize',()=>{
    setWid(window.innerWidth)
    if(wid >=1000 ){
                setIsMobile(false)
            }else{
                setIsMobile(true)
            }

   })
   console.log('wid' , wid)

}, [wid])


    return (
        <>
            {/* Navigated elements             */}
            <motion.div
              ref={ref}
              animate={control1}
              initial='hidden'
              variants={ showElement }
            >
            <Element 
             el={helpInfos[curr]} />

            </motion.div>
            
             <div className='buttons'> 

         {helpInfos.slice(0,4).map((el,index )=>(
         <div>             
                { isMobile ?<button className='dot-btn' onClick={()=>{control1.start("visible");setCurr(index)}}></button> :
                    <button 
                    className='label-btn' onClick={()=>{control1.start("visible") ;setCurr(index)}}>{el.label}</button>
                }
                    </div>
                ))}
            </div>
               

            {/* Normal Feed  */}

            {helpInfos.slice(4,helpInfos.length).map((el)=>(
                  <Element el={el} />

            ))}
        </>
    )
}

export default Section3
