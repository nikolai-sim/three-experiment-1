import React , {useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars, softShadows, MeshWobbleMaterial, OrbitControls, Billboard} from '@react-three/drei'
import KeyboardEventHandler from 'react-keyboard-event-handler'

function Box (){

  const colorArr = ['white', 'red', 'orange' , 'yellow' , 'green', 'blue' , 'indigo' , 'violet', 'white']

  
  const [color , setColor] = useState('white')
  const [woble , setWobble] = useState(false)

  const clickHandle = () => {
    const i = Math.floor(Math.random() * 8)
    setColor(colorArr[i])
  }

  const handleKey = (key , e) => {
    console.log(key)
    if ( key === 'c') {
      clickHandle()
    }
    else if (key === 'w' ) {
      return (woble ? setWobble(false) : setWobble(true))
    }
    
  }
  

  return (
    <>
    <KeyboardEventHandler
      handleKeys={['c' ]}
      onKeyEvent={handleKey} />
    <mesh onClick={clickHandle}>
      <torusBufferGeometry attach='geometry' color ={color}  wireframe='true'/>
      <MeshWobbleMaterial color ={color} wireframe='false'/>
      
      
      </mesh>
    </>
    
  )
}
export default Box