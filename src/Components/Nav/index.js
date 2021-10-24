import React , { useState , useEffect } from 'react'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import './nav.css'
import logo from '../../images/logo.png'
import { motion } from 'framer-motion'


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

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
   console.log('wid' , wid)
   console.log('isMobile' , isMobile)

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
                      <a>Why us</a>
                  </li>
                  <li onClick={()=> setOpen(false)}>
                    <a>Use Cases <i class="fas fa-chevron-down"></i></a>
                  </li>
                  <Link to='/pricing' onClick={()=> setOpen(false)}>
                  <li className='tag'>
                    <a >Pricing</a>
                  </li>
                  </Link>

                  <li className='none'>
                    <button className='nav-btn' href="#">Get Started</button>
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
