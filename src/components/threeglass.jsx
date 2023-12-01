
import { OrbitControls, useTexture} from '@react-three/drei';
import CustomCanvas from './canvas.jsx';
import BoxTexture from './boxtexture.jsx';


const ThreeGlass = () => {
  // const props = useTexture({
  //   map: 'https://i.imgur.com/2xXrz3F.jpg',
  // })

    return (
        <div class="w-screen h-screen">
        <CustomCanvas>
          <ambientLight intensity={2} />
          <pointLight position={[40, 40, 40]} />
          <BoxTexture />

          <mesh position={[0,1,1]}>
            <boxGeometry args={[5]}  />
            <meshPhysicalMaterial
              clearcoatRoughness={0}
              roughness={0}
              thickness={0.5}
              transmission={1}

              />

          </mesh>
          <OrbitControls />
        </CustomCanvas>
  
      </div>
    )

}

export default ThreeGlass;