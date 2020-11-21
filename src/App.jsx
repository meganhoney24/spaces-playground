import React from "react";
import {Color, Vector3} from "three";
import {StandardEnvironment, Background, Logo, Interactable, Image} from "spacesvr";

function App() {
    return (<StandardEnvironment
        player={{
        pos: new Vector3(0, 1, 0),
        rot: Math.PI / 2
    }}
        canvasProps={{
        camera: {
            far: 300
        }

    }}>
        <ambientLight/>
        <group scale={[2, 2, 2]}> 
        <mesh rotation={[Math.PI/-2, 0, 0]}>
                <boxBufferGeometry args={[1,1,1]} />
                <meshStandardMaterial color="blue"/>

            </mesh>
            <mesh rotation={[Math.PI/-2, 0, 0]}>
                <planeBufferGeometry args={[400,400]} />
                <meshStandardMaterial color="red"/>

            </mesh>
        </group>
        </StandardEnvironment>);
}

export default App;
