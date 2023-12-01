import React from 'react';
import { Canvas } from "@react-three/fiber";

const CustomCanvas = (props) => {
    return (
        <div class="w-screen h-screen">
            <Canvas camera={[100,100,100]}>
                {props.children}
            </Canvas>
        </div>
    )
}

export default CustomCanvas;  