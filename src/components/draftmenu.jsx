import React, { useState } from 'react'
import "../app/globals.css";
import { useIsomorphicLayoutEffect } from '../utils/isomorphiceffects';
import gsap from 'gsap';


const DraftMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setactive] = useState("example");



  const config = [{
    "title":"Home",
    "img":"https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "title":"About",
    "img":"https://images.unsplash.com/photo-1701770574678-1e0cd235d0c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  },
  {
    "title":"Contact",
    "img":"https://images.unsplash.com/photo-1701729540349-e563ab42e6f6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
  }

]  

  const [image, setimage] = useState(config[0].img)
  const handlehover = (t) => {
    gsap.to("#imagen", {opacity:0,duration:0.5,
      onComplete:()=>{
        setimage(t.img)
      }
    })
    gsap.to("#imagen", {delay:1,opacity:1,duration:0.5})

  }


  
  useIsomorphicLayoutEffect(() => {
    gsap.set("#column", { xPercent: -100 })
    
    let ctx = gsap.context(()=>{
      const columns = gsap.utils.toArray("#column");
      const items = gsap.utils.toArray("#items");
    
      let tl= gsap.timeline();

      if (isOpen) {
        gsap.set("#parent", { display: "block" })
        gsap.set("#menu", { display: "grid" })
        tl.fromTo(columns, { xPercent: -100 }, { xPercent: 0, stagger: 0.07 }).to("#imagen", {opacity:1},"-=0.5").to(items,{opacity:1,stagger:0.1},"-=0.5")
      } else {
        gsap.set("#menu", { display: "grid" })
        
        tl.fromTo(columns, { xPercent: 0 }, { xPercent: -100, stagger: 0.1 })
        .to("#imagen", {opacity:0},"-=0.5")
        .to(items,{opacity:0,stagger:0.1},"-=1")
      
        
      }
      });



    return ()=> ctx.revert();

  },[isOpen]);




  return (
    <>
      <header  className='w-full absolute  flex justify-end'>
        <svg
        style={{width:"50px"}}
          id="hamburger"
          className={` z-50 m-4 ${isOpen ? "example" : "examplereverse"}`}
          onClick={() => setIsOpen(!isOpen)}
          viewBox="0 0 60 40"
        >
          <g
            stroke="#ffffff"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path id="top-line" d="M10,10 L50,10 Z" />
            <path id="middle-line" d="M10,20 L50,20 Z" />
            <path id="bottom-line" d="M10,30 L50,30 Z" />
          </g>
        </svg>
      </header>

      <div id="parent" className='absolute w-full h-full hidden'>
      <div id="menu"  className="w-full h-full absolute hidden  grid-rows-5 z-20 ">
        <div id="column" className='bg-blue-400 translate-x-0 w-full h-full'/>
        <div id="column" className='bg-blue-400 w-full h-full'/>
        <div id="column" className='bg-blue-400 w-full h-full'/>
        <div id="column" className='bg-blue-400 w-full h-full'/>
        <div id="column" className='bg-blue-400 w-full h-full'/>
      </div>
      <div className='absolute w-full h-full z-30 flex lg:flex-row flex-col'>
      <div className='h-2/6 order-2 lg:order-1 w-full lg:w-2/6 lg:h-full'>
        <img id="imagen" src={image} className='w-full h-full opacity-0' alt="" />
      </div>
      <div className='lg:w-4/6 order-1 lg:order-2 lg:h-full h-4/6 w-full'>
        <div className='lg:p-[100px] flex flex-col'>
          {config.map((item,index)=>{
            return(
   
                <a id='items' key={index} onMouseEnter={()=>{
                  handlehover(item)
                }} className='text-8xl font-bold text-white opacity-50 hover:opacity-100 w-full '>{item.title}</a>

            )
          })}
        </div>
      </div>
      </div>
      <div>
        
      </div>

      </div>


    </>
  )
}

export default DraftMenu