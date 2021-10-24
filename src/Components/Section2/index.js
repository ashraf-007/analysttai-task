import React ,{ useState , useEffect } from 'react'
import { s2Infos } from '../../data'
import leftLines from '../../images/left-lines.svg'
import rightLines from '../../images/right-lines.svg'
import './section2.css'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";



const Section2 = () => {
    const [ tab , setTab ] = useState(0)
    const showElement = {
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
        hidden: { opacity: 0, scale: 0 }
      };
    const controls = useAnimation();
    const [ref, inView] = useInView();
    useEffect(() => {
        if (inView) {
          controls.start("visible");
        }
      }, [controls, inView]);
    return (
        <div style={{backgroundColor:'#FEC72F'}}>

        <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
            variants={showElement}
        className='section-2'>
            <h1>From Information to Intelligence</h1>
            <div className='s2'>
                <h2>{s2Infos[tab].title}</h2>
                <p>{s2Infos[tab].text}</p>
            <div className='video-container'>
                    <video width='766' height='460' autoPlay loop muted playsInline >
                        <source src={s2Infos[tab].videoSource} />
                    </video>

            </div>
            <img className='left-lines' src={leftLines} alt="" />
            <img className='right-lines' src={rightLines} alt="" />
            </div>
            <div className=''>
                { s2Infos.map((el , index )=>(
                <button className='dots-btn' id={el.id} onClick={()=>{setTab(index)}} > </button>
                ))}
           

            </div>
        </motion.div>
        </div>

    )
}

export default Section2
