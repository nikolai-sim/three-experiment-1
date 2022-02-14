import React , {useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars, softShadows, MeshWobbleMaterial, OrbitControls, Billboard, Text} from '@react-three/drei'

function Board() {
  return(
<Billboard
  follow={true}
  lockX={false}
  lockY={false}
  lockZ={false} // Lock the rotation on the z axis (default=false)
  
>
  <Text fontSize={10} color='ghostwhite'>Press C to change object Color </Text>
  
</Billboard>)
}
export default Board