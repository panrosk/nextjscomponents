import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import React, { useRef } from 'react'
import { useEffect } from 'react'

const Parallax = () => {
    const image = useRef(null)
    const container = useRef(null)
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger)
        let ctx = gsap.context(()=>{
            const tl = gsap.timeline()

            tl.to(image.current,{yPercent:-50, ease:'none',scrollTrigger:{trigger:container.current,markers:true,start:"top 50%",scrub:true,pin:true,end:"top top"}}).to(image.current,{yPercent:50, ease:'none',scrollTrigger:{trigger:container.current,markers:true,start:"top top",scrub:true,pin:true,end:"bottom 50%"}})
        
        })
        return () => ctx.revert();
        // gsap.fromTo(image.current,{yPercent:0},{yPercent:`${speed*10}%`, ease:'none',
        //  scrollTrigger:{trigger:container, start:'top bottom', end:'bottom top', scrub:true,markers:true}})
    },[])
  return (
    <>
        <div className='h-screen w-screen relative'/>
        <div ref={container} className='w-full h-[800px] flex items-center overflow-hidden'>
        <img ref={image}  src="https://assets.codepen.io/756881/neon3.jpg" className='w-[600px]  h-[1600px]' alt="" />

        </div>
        <div className='h-screen w-screen'/>


    </>

    
  )
}

export default Parallax