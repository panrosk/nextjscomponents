import {Text,TorusKnot,OrthographicCamera} from '@react-three/drei'
import { extend,createPortal,useFrame} from '@react-three/fiber'
extend({TorusKnot,Text})
import React, { useRef, useMemo } from 'react'

import * as THREE from "three"
import { fragmentShader ,vertexShader} from '../utils/shaders'







const MovingText = ({children}) => {
  const cam = useRef()
  const mesh = useRef()
  const [scene, target] = useMemo(() => {
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('black')
    const target = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight)
    return [scene, target]
  }, [])

  let time;

  useFrame(state => {
    state.gl.setRenderTarget(target)
    state.gl.render(scene, cam.current)
    state.gl.setRenderTarget(null)
    time = state.clock;
    mesh.current.material.uniforms.uTime.value = time.getElapsedTime();
  })
  return (
    <>
      <OrthographicCamera ref={cam} position={[0, 0, 10]} zoom={10} />
      {createPortal(
        <Text
          color="#FFFFFF"
          fontSize={30}
          
          text={children}
          font="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
          textAlign='center'
          >
          {children}
        </Text>,
        scene
      )}
      <mesh ref={mesh}>
        <torusKnotGeometry args={[9, 3, 768, 3, 4, 3]} attach="geometry"/>
        <shaderMaterial
          side={THREE.DoubleSide}
          color="#000000"
          uniforms={{
            uTime:{
              value:time,
            },
            uTexture:{
              value:target.texture
            }
          }}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          map={target.texture}
        />
        
        
        {/* <meshStandardMaterial attach="material" map={target.texture}/> */}
      </mesh>
    </>
  )
}

export default MovingText