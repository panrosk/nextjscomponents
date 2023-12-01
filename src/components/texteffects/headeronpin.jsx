import React, { useEffect } from 'react';
import gsap from 'gsap';
import "./headerpin.css"
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import SplitType from 'split-type';

const HeaderPin = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const texto = new SplitType('.header', { lineClass: "overflow-hidden" })
    gsap.fromTo(texto.words,
      { yPercent: 100 }, {
        yPercent: 0, stagger: 0.1, duration: 1,
      ease: 'power4.inOut'
      , scrollTrigger: { trigger: "section.gallery", start: "top 20%", end: "bottom top", markers: true, pin: true, toggleActions: "play none restart reverse" }
    })

  }, []);

  return (
    <div>
      <section>
        <h1 className='text-white'>hola que tal</h1>
      </section>
      <section className="gallery ">
        <h1 className='text-white header text-[40px]'>¡Que xopa! Soy Oscar Fuentes y este es mi espacio digital.Aquí muestro mi trabajo como freelance designer and developer y también mi parte creativa como escritor de opinion y poeta donde publico bajo el seudónimo de Blanche Descartes.</h1>
      </section>
      <section>
        <h1 className='text-white'>hola que tal</h1>
      </section>

    </div>



  );
};

export default HeaderPin;



