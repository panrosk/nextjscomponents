
import React from 'react';

import { OrbitControls, useTexture} from '@react-three/drei';

const BoxTexture = () => {

    const props = useTexture({
    map: 'https://plus.unsplash.com/premium_photo-1663133679087-bc5deb50ab00?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  })

  return (

      <mesh>
        <planeGeometry args={[5,10]} position={[0, 0, 0]}  />
        <meshBasicMaterial {...props} />
      </mesh>

  );
};

export default BoxTexture;
