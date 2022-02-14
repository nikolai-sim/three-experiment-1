import React , {useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars, softShadows, MeshWobbleMaterial, OrbitControls, Cloud} from '@react-three/drei'
import Box from './Box'
import Board from './Board'
import KeyboardEventHandler from 'react-keyboard-event-handler'




const Scene = () => {
  const [x , setX ] = useState(0)
  const [y , setY ] = useState(0)
  const [z , setZ ] = useState(0)

  const handleKey = (key , e) => {
    switch (key) {
      case 'left' : setX((x - 1))
      break
      case 'up' : setY(( y + 1 ))
      break
      case 'right' : setX(( x + 1 ))
      break
      case 'down' : setY(( y - 1))

    }
  }

  return ( 
    <>
    <KeyboardEventHandler
      handleKeys={['left' , 'up' , 'right' , 'down' ]}
      onKeyEvent={handleKey} />
    <Canvas>
      <ambientLight intensity={0.5}/>
      <spotLight position={[50, 50, 50]}/>
      <Stars/>
      <mesh position = {[x , y , z]}>
        <OrbitControls />
        <Box/>
      </mesh>
      
      <mesh position ={[100, 10, 10]}>
       <Board/>
      </mesh>
    </Canvas>
    </>
  )
}

export default Scene