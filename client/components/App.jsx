import React , {useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars, softShadows, MeshWobbleMaterial, OrbitControls} from '@react-three/drei'



const Scene = () => {

  return ( 
    <Canvas>
      <ambientLight intensity={0.5}/>
      <spotLight position={[50, 50, 50]}/>
      <Stars/>
      {/* <pointLight position={[10, 10, 10]}/> */}
      {/* <PerspectiveCamera> */}
      <mesh>
        {/* <planeBufferGeometry args={[3, 5]}/>
        <meshStandardMaterial color='lightblue'/> */}
        <OrbitControls />
        <Box/>
        
      </mesh>
      
    </Canvas>
  )
}

const Box = () => {

  const colorArr = ['white', 'red', 'orange' , 'yellow' , 'green', 'blue' , 'indigo' , 'violet', 'white']

  
  const [color , setColor] = useState('white')

  const clickHandle = () => {
    const i = Math.floor(Math.random() * 8)
    setColor(colorArr[i])
  }
  

  return (
    <>
    <mesh onClick={clickHandle}>
      <torusBufferGeometry attach='geometry' color ='0xFF6347'  wireframe='true'/>
      <meshBasicMaterial color ={color} wireframe='false'/>
      
    </mesh>
    </>
    
  )
}

function App () {  
  return (
    <Scene></Scene>
  )
}

export default App
