import React,{useEffect} from 'react';
import gsap from 'gsap';
import "./artgallery.css"
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const ArtGallery = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const gallery = gsap.utils.toArray('img')
    gsap.set('img', { 
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
    })
    gsap.set('.border', {
        scaleX: 0
    })
    gsap.set(['span', 'p'], {
        yPercent: 100
    })

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: 'section.gallery',
            start: 'top 20%',
            end: 'bottom top',
            toggleActions: 'play none play reverse',
            markers: true
        },
        defaults: {
            ease: 'power4.inOut'
        }
    })

    tl
    .from('li', {
        y: -100,
        stagger: .1
    })

    .to('img', {
        duration: 1,
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    }, "-=.5")
    .to('.border', {
        scaleX: 1
    }, "-=.5")
    .to(['span', 'p'], {
        yPercent: 0,
        stagger: .1
    }, "-=.5")

  }, []);

  return (
    <body>
    <section>
        <h1 className='text-white'>hola que tal</h1>
    </section>
    <section className="gallery ">
        <ul>
            <li data-depth='0.10'>
                <a href="#">
                    <img src="https://images.unsplash.com/photo-1699997184068-b85a778a245a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Syntholtic"/>
                    <div className="img"></div>

                    <div className="border"></div>

                    <div className="info">
                        <span>01</span>
                        <p>Syntholtic</p>
                    </div>
                </a>
            </li>
            <li data-depth='0.20'>
                <a href="#">
                    <img src="https://images.unsplash.com/photo-1699917500127-77516c8512eb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bumblebee"/>

                    <div className="border"></div>

                    <div className="info">
                        <span>02</span>
                        <p>Bumblebee</p>
                    </div>
                </a>
            </li>
            <li data-depth='0.30'>
                <a href="#">
                    <img src="https://images.unsplash.com/photo-1699917500127-77516c8512eb?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Smorg"/>

                    <div className="border"></div>

                    <div className="info">
                        <span>03</span>
                        <p>Smorg</p>
                    </div>
                </a>
            </li>
            <li data-depth='0.40'>
                <a href="#">
                    <img src="https://images.unsplash.com/photo-1699907887136-c669c93187f2?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Violeta"/>

                    <div className="border"></div>

                    <div className="info">
                        <span>04</span>
                        <p>Violeta</p>
                    </div>
                </a>
            </li>
        </ul>
    </section>

    </body>



  );
};

export default ArtGallery;



