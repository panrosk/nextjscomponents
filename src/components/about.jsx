
import React, {useEffect} from 'react';
import gsap from 'gsap';

const HelloWorld = () => {
  useEffect(() => {

    gsap.fromTo('.text-white', {opacity: 0}, {opacity: 1, duration: 1, delay: 1});
  }, []);
  return (
    <div className='bg-black'>
        <h1 className='text-white'>Hello World!</h1>
    </div>
  )
};

export default HelloWorld;
