import React from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from 'three'

const Scene = () => {
  return ( 
    <Canvas>
      <pointLight position={[10, 10, 10]}/>
      {/* <PerspectiveCamera> */}
      <mesh>
        <planeBufferGeometry args={[3, 5]}/>
        <meshStandardMaterial color='lightblue'/>
      </mesh>
    </Canvas>
  )
}

function App () {  
  return (
    <Scene></Scene>
  )
}

export default App
