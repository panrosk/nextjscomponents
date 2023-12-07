import React from 'react';
import { useIsomorphicLayoutEffect } from '../utils/isomorphiceffects';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const RotationClipath = () => {

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    let ctx = gsap.context(() => {

        let tl = gsap.timeline({
            scrollTrigger:{
                trigger:"#content",
                start:"top top",
                end:"+=200%",
                scrub:1,
                pin:true,
                pinnedContainer:"#content",
    
            }
        });

        tl.to("#holder",{
            rotation:0,
            clipPath:"polygon(0% 0%,100% 0%, 100% 100% ,0% 100%)",
            ease:"power1.inOut",
        }).to("#holder img",{
            objectFit:"cover",
            objectPosition:"bottom",
            scale:1,
            ease:"power1.inOut",
        },"-=.5")

        // gsap.to("#holder",{
        //     rotation:0,
        //     clipPath:"polygon(0% 0%,100% 0%, 100% 100% ,0% 100%)",
        //     "ease":"power1.inOut",
        //     scrollTrigger:{
        //         trigger:"#content",
        //         start:"top top",
        //         end:"+=200%",
        //         scrub:1,
        //         pin:true,
        //         anticipatePin:1,
        //         pinnedContainer:"#content",
    
        //     }
        // })

        // gsap.to("#holder img",{
        //     scale:1,
        //     "ease":"power1.inOut",
        //     scrollTrigger:{
        //         trigger:"#content",
        //         start:"top top",
        //         end:"+=200%",
        //         scrub:1,
        //         pin:true,
        //         anticipatePin:1,
        //         pinnedContainer:"#content",
    
        //     }
        // })
        
    });



    return ()=> ctx.revert();

  }, []);

  return (
    <>
        <div className='h-screen w-screen'>
            scrollTrigger
        </div>
    <div id="content" className='top-0 w-screen h-full min-h-screen'>
        <div id="holder" style={{clipPath:"polygon(37.5% 20%,62.5% 20%, 62.5% 80% ,37.5% 80%)",rotate:"30deg"}} className='bg-white relative top-0 h-screen w-screen '>
            <img  src="https://images.unsplash.com/photo-1625240752293-00b16d38c512?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='relative' style={{transform:"scale(2)"}} alt="" />          
        </div>
    </div>
    <div className='h-screen w-screen'>

    </div>
    </>
  )
}

export default RotationClipath