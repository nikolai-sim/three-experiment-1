import React , {useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars, softShadows, MeshWobbleMaterial, OrbitControls, Billboard} from '@react-three/drei'

function Box (){

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
      <meshLambertMaterial color ={color} wireframe='false'/>
      </mesh>
    </>
    
  )
}
export default Box