import React from 'react'
import { Canvas,useFrame ,extend} from '@react-three/fiber'
import { OrbitControls,Box } from '@react-three/drei'
import MovingText from './text3d'



const InfinteText = () => {

  return (
    <div className=' w-screen h-screen bg-black'>
        <Canvas>
        <OrbitControls
          enableDamping
          enablePan
          enableRotate
          enableZoom
        />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} />
        <pointLight position={[-10, -10, -5]} color="red" intensity={5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        
        <MovingText>
          Bon Giorno
        </MovingText>
        </Canvas>
    </div>
  )
}

export default InfinteText