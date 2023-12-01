'use client'
import { Canvas } from '@react-three/fiber'
import { extend } from '@react-three/fiber'
import Box from "../components/box.jsx"

import Image from 'next/image'
import { OrbitControls } from '@react-three/drei'



export default function Home() {
  return (

    <div class="w-screen h-screen">
      <Canvas className='' camera={{ position: [0, 0, 20] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <mesh>
          <torusKnotGeometry/>
          <meshNormalMaterial />
        </mesh>
        {/* <Box position={[10, 0, 0]} />
        <Box position={[-10, 0, 0]} />
        <Box position={[0, 10, 0]} />
        <Box position={[0, -10, 0]} /> */}
        <OrbitControls />
      </Canvas>

    </div>
  )
}
