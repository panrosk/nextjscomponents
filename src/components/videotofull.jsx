import React from 'react'
import { useIsomorphicLayoutEffect } from '../utils/isomorphiceffects'
import gsap from 'gsap';
const VideoToFull = () => {
  useIsomorphicLayoutEffect(() => {
    let video = document.querySelector("video")
    let ctx = gsap.context(() => {
        const tl = gsap.timeline({});
        gsap.set(video,{
            objectFit:"cover",
            objectPosition:"center",
            scale:1.2,
        })
        tl.fromTo("#holder",{
            yPercent:100,
        },{
            yPercent:0,
            clipPath:"polygon(20% 20%, 80% 20%, 80% 62.5%, 20% 62.5%)",
            duration:2,
            ease:"circ.in",   
            onComplete:()=>{
                video.play()
            }
        }

        ).to("#holder",{delay:0.2,duration:2,clipPath:"polygon(0% 0%,100% 0%, 100% 100% ,0% 100%)",ease:"power4.out"})
    })

    return () => {
      ctx.revert()
    }
    
  }, [])

  return (
    <div id="holder" style={{clipPath:"polygon(20% 0%, 80% 0%, 80% 62.5%, 20% 62.5%)"}}  className='w-screen h-screen flex justify-center items-center  bg-white '>
    <video playsInline  loop muted  className='w-screen h-screen object-cover' src="https://dwavesolutions.nyc3.cdn.digitaloceanspaces.com/betodancing.mp4"></video>
        {/* <video
			poster="https://dwavesolutions.nyc3.cdn.digitaloceanspaces.com/betoposter2.png"
			muted
			autoplay
			bind:paused
			loop
			playsinline
			className="absolute w-full h-full object-cover"
			src="https://dwavesolutions.nyc3.cdn.digitaloceanspaces.com/betodancing.mp4"
		></video> */}
    </div>
  )
}

export default VideoToFull