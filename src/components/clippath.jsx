import gsap from 'gsap'
import React,{useLayoutEffect} from 'react'

const ClipPath = () => {
  useLayoutEffect(() => {
    const elements = gsap.utils.toArray('.ex')
    const tl = gsap.timeline(
        {"ease":"power3.inOut",
        "duration":3,
        }
    )

    tl.fromTo(elements, { // Initial animation state
        opacity: 1, // Fully visible
        'clip-path': 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)' // CSS clip-path shape
    }, { // Animation target state
        stagger: 0.3,
        'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', // Target shape of the clip-path
    }, 0)
    .to(elements,{
        'clip-path': 'polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)',
        stagger: 0.3,
    },'>'
    )

    tl.play()



  }, [])
  return (
    <div className='w-screen h-screen relative'>
        <img src="https://images.unsplash.com/photo-1700451761281-fa705b64935d?q=80&w=2500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='absolute top-0 left-0 w-full h-full object-cover ex' alt="" />
        <img src="https://images.unsplash.com/photo-1571053748382-141b7de59b88?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='absolute top-0 left-0 w-full h-full object-cover ex' alt="" />
        <img src="https://images.unsplash.com/photo-1700629691463-3d8a9294a80c?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='absolute top-0 left-0 w-full h-full object-cover ex' alt="" />
    </div>
  )
}

export default ClipPath