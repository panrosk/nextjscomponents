
import React,{useEffect} from 'react';
import SplitType from 'split-type';
import gsap from "gsap"


const HelloWorld = (props) => {

    const turngray = () =>{
        gsap.to('.text', {
            duration: 1,
            color: 'gray'
        })
    }

    const turnwhite = () =>{

        gsap.to('.text', {
            duration: 1,
            color: 'white'
        })
    }
    
    useEffect(() => {
        const texto = new SplitType('.text')
        gsap.from(texto.chars, {
            duration: 1,
            yPercent:100,
            stagger: 0.1,

        })
        
            
    }, [])
    return (
        <div className='overflow-hidden' style={{height:props.size+30}}>
            <h1 onMouseEnter={turngray} onMouseLeave={turnwhite} className='text' style={{ fontSize:props.size }}>{props.text}</h1>
        </div>
    );
};

export default HelloWorld;
