import React , { useState , useEffect } from 'react'
import {
  Link
} from "react-router-dom";
import './nav.css'
import logo from '../../images/logo.png'
import { motion } from 'framer-motion'



const Nav = () => {
  const [ open , setOpen ] = useState(false)
const [ isMobile , setIsMobile ] = useState(false)

  const variants = {
  
    show:{
      opacity:open ? 1 : 0,
      y : !open ? -10 : 0 ,
      transition: { ease:"easeInOut" }
    }
  }
  let [wid , setWid ] = useState(window.innerWidth)


useEffect(() => {
   window.addEventListener('resize',()=>{
    setWid(window.innerWidth)
    if(wid >=725){
                setIsMobile(false)
            }
            else{
              setIsMobile(true)
            }
    

   })
  
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [wid])
    return (
        <>
          <nav className='nav' >
            <Link to='/'>
              <div onClick={()=> setOpen(false)}>
                  <img src={logo} alt="" />
              </div>
              </Link>
          <motion.div 
          className='ul-container overflow-hidden'
          >

              <motion.ul
                // initial='hidden'
                animate= 'show'
                variants={ isMobile && variants}
                // style={{transform: !isMobile && 'translateY(0)'}}
               className='ul'>
                  <li onClick={()=> setOpen(false)}>
                      <button>Why us</button>
                  </li>
                  <li onClick={()=> setOpen(false)}>
                    <button>Use Cases <i class="fas fa-chevron-down"></i></button>
                  </li>
                  <Link to='/pricing' onClick={()=> setOpen(false)}>
                  <li className='tag'>
                    <button >Pricing</button>
                  </li>
                  </Link>

                  <li className='none'>
                    <p className='nav-btn'>Get Started</p>
                  </li>
              </motion.ul>
             
          </motion.div>
          <div onClick={()=> setOpen(!open)} className="burger">
              <i style={{display: open ? 'none':'block'}} className="fas fa-bars"></i>
              <i style={{display: !open ? 'none':'block'}}className="fas fa-times"></i>
              </div>
             </nav>  
        </>
    )
}

export default Nav
