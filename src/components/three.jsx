import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

const Three = () => {

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

export default Three;