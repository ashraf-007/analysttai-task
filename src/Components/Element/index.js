import React , { useState , useEffect } from 'react'
import './element.css'
import leftLines from '../../images/left-lines.svg'
import rightLines from '../../images/right-lines.svg'
import { motion , useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";


const Element = ({ el : { title , text , heading , video , image , secondaryImages , span , id,vertical }}) => {
const control = useAnimation()
const imgControl = useAnimation()
const titleControl = useAnimation()
const [ref1, isInView] = useInView();
const [first, setFirst ] = useState(true)

const showElement2 = {

    hidden: { opacity: 0, scale: id<6 ? 0:1 },
    visible: { 
      opacity: id<6 ? [0, 1] : 1, 
      scale:1, 


      transition: { duration: 0.5 , ease:'easeIn' ,
  }}

  };
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delay:1
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 , scale:0 },
    show: { opacity: 1 , scale:[0 ,1.2,1 ]}
  }

   const img ={
    hidden: { opacity: 0 , scale:0 },
    show: { opacity: 1 , scale:[0 ,1.2,1 ] ,transition:{ delay:0.5}}
   }
   const titleVar = {
    hidden: { opacity: 0 ,y:-30 },
    show: { opacity: 1 ,y:[ -30 , 0 ] ,transition:{ delay:0.5}  }
   }
   const textVar = {
    hidden: { opacity: 0 ,y:30 },
    show: { opacity: 1 ,y:[ 30 , 0 ] ,transition:{ delay:0.5}  }
   }
    useEffect(() => {
    if(first){
        if (isInView) {
            control.start('visible');
            id==7 &&  imgControl.start('show')
            id==8 && titleControl.start('show') 
            id==9 &&  imgControl.start('show')
          setFirst(false)
        }
    }
      }, [control , isInView ]);

    return (
        <motion.div 
         variants={showElement2}
          animate={control}
          ref={ref1}
         initial='hidden'

    
        className="element">
            <img className='left' style={{ left: id==9 && '-40%'}} src={leftLines}alt="" />
            <img className='right' style={{ display:'none'}}src={rightLines} alt="" />

            { heading && <motion.h1
              animate={titleControl}
              initial='hidden'
              variants={ id==8 && titleVar}
            >{heading}</motion.h1> }

            { title && <h2>{title}</h2> }
            { text && <motion.p
             animate={titleControl}
             initial='hidden'
             variants={ id==8 && textVar}
            >{text}</motion.p> }

            { span && <span>{span}</span> }

            { image &&
             <motion.img 
                        initial='hidden'
                        animate={imgControl}
                        variants={id==7  || id==9 && img}
             style={{ width : id==9  && '810px' ,height : id==9 && '400PX' , margin:'10px auto'}}  className={id!=9 && 'img'} src={image} alt="" /> }


            { video && 
            <div className="video-container">
                <video width="766" height="360" autoPlay loop playsInline muted>
                    <source src={video}/>
                </video>
        
            </div>
             }
           { secondaryImages && 
            <motion.div 
            initial='hidden'
            animate='show'
            variants={container}
            className='secondary-images'>

              <motion.img
              variants={item}
              className='i0' src={secondaryImages[0]} alt="" />
              <motion.img 
              variants={item}

              className='i1' src={secondaryImages[1]} alt="" />
              <motion.img 
              
              variants={item}

              className='i2' src={secondaryImages[2]} alt="" />
              <motion.img 
             
              variants={item}

              className='i3' src={secondaryImages[3]} alt="" />

             </motion.div>}
                { vertical && <img style={{ margin:'0 auto'}} src={vertical} alt="" />}

        </motion.div>
    )
}

export default Element
